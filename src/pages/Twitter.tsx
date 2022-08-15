import React from "react";
import { useState } from "react"
import { Tweet } from "@/components/Tweet"
import { Button } from "@/styles/GlobalStyle"

export function Home() {
    const [tweets, setTweets] = useState<string[]>([
        "Tweet 1",
        "Tweet 2",
        "Tweet 3",
        "Tweet 4"
    ]);

    function createTweet() {
        setTweets([...tweets, "Tweet 5"])
    }

    return (
        <div>
            {tweets.map(tweet => {
                return <Tweet text={tweet} />
            })}

            <Button color="white" bgColor="darkBlue" onClick={createTweet}>Adicionar tweet</Button>
        </div>
    );
};
