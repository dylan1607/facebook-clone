import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import {
  CameraIcon,
  VideoCameraIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imagePost, setImagePost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imagePost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imagePost, "data_url");

          //clean state after publish

          //when upload complete, get URL from id post and merge with database
          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              console.log(error);
            },
            () => {
              //upload succesfull
              console.log("upload succesfull");
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts")
                    .doc(doc.id)
                    .set(
                      {
                        postImage: url,
                      },
                      { merge: true }
                    )
                    .then(() => removeImage());
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };
  const addImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadstart = () => console.log("Uploading...");
    reader.onload = (readerEvent) => {
      console.log("Upload Done");
      setImagePost(readerEvent.currentTarget.result);
    };
  };
  const removeImage = () => {
    setImagePost(null);
  };

  return (
    <div
      className="bg-white p-1 rounded-2xl shadow-md
    text-gray-500 font-medium mt-6"
    >
      <div className="flex space-x-2 p-3 items-center">
        <Image
          alt=""
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow
            px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button type="submit" className="hidden" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imagePost && (
          <div
            onClick={removeImage}
            className="flex flex-2 items-center space-x-1 hover:brightness-110
            transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <Image
              alt=""
              src={imagePost}
              height={50}
              width={50}
              objectFit="contain"
            />
            <XCircleIcon className="h-7 text-red-500 text-center" />
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-300" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} onChange={addImage} type="file" hidden />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
