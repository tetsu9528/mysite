import React from "react";

const BoxRight = () => {
    return (
        <div className="box-right">
            <h2>プロフィール</h2>
            <div className="icon">
                <img src="https://dummyimage.com/90x90/000/fff" alt="アイコン"></img>
            </div>
            <p>NAME</p>
            <p className="self-introduction">
                "text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text
            </p>


            <div className="site">
                <h3>公式サイト↓</h3>
                <a href="https://twitter.com/?lang=ja" target="_blank" rel="noreferrer">
                    <img
                        src="https://dummyimage.com/720x480/000/fff"
                        alt="公式サイト"
                    ></img>
                </a>

                <h3>販売サイト↓</h3>
                <a href="https://twitter.com/?lang=ja" target="_blank" rel="noreferrer">
                    <img
                        src="https://dummyimage.com/720x480/000/fff"
                        alt="販売サイト"
                    ></img>
                </a>
            </div>


            <div className="sns">
                <h3>SNS1</h3>
                <a
                    href="https://twitter.com/?lang=ja"
                    target="_blank"
                    rel="noreferrer"
                    alt="SNS1"
                    id="x"
                >
                    SNS1
                </a>
                <h3>SNS2</h3>
                <a
                    href="https://twitter.com/?lang=ja"
                    target="_blank"
                    rel="noreferrer"
                    alt="SNS2"
                    id="fanbox"
                >
                    SNS2
                </a>
                <h3>SNS3</h3>
                <a
                    href="https://twitter.com/?lang=ja"
                    target="_blank"
                    rel="noreferrer"
                    alt="SNS3"
                    id="masyumaro"
                >
                    SNS3
                </a>
                <h3>SNS4</h3>
                <a
                    href="https://twitter.com/?lang=ja"
                    target="_blank"
                    rel="noreferrer"
                    alt="SNS4"
                    id="crepu"
                >
                    SNS4
                </a>
            </div>
        </div>
    );
};

export default BoxRight;
