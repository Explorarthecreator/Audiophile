"use client";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  // const storageId = "kg2cnxyhasga20hjmcge19phbn7rp3jw";
  const task = useQuery(api.listMessages.list);
  // console.log(task);

  if (task) {
    console.log(task);
  }
  return (
    <div>
      {/* {task &&
        task.map((t) => (
          <Image
          key={t._id}
            src={t.lala}
            className="h-20 w-20"
            width={1000}
            height={1000}
            alt=""
          />
        ))} */}
      {task && task.map((t) => <p key={t._id}>{t.lala}</p>)}

      <Image
        src={
          "https://hardy-terrier-975.convex.cloud/api/storage/ec0f4ade-5078-47b1-9ec3-4eb1fda6966a"
        }
        alt=""
        width={1000}
        height={1000}
        className="w-20 h-20"
      />

      <p className="text-white">God is good</p>
      {/* <p>{getImageUrl.href}</p> */}
    </div>
  );
}
