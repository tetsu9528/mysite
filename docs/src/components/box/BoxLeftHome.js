import React from "react";
import { Link } from "react-router-dom";
const BoxLeftHome = () => {
  return (
    <div className="box-left">
      <h2>自己紹介</h2>
      <p className="self-introduction">
        text text text text text text text text text text text text text text
        text
      </p>


      <h2>記事一覧</h2>
      <div className="contents">
        <div className="content">
          <Link to="/blog">
            <img src="https://dummyimage.com/720x480/000/fff" alt="記事1"></img>
            <p>
              text text text text text text text text text text text text text
              text
            </p>
          </Link>
        </div>
        <div className="content">
          <Link to="/blog">
            <img src="https://dummyimage.com/720x480/000/fff" alt="記事2"></img>
            <p>
              text text text text text text text text text text text text text
              text
            </p>
          </Link>
        </div>
        <div className="content">
          <Link to="/blog">
            <img src="https://dummyimage.com/720x480/000/fff" alt="記事3"></img>
            <p>
              text text text text text text text text text text text text text
              text
            </p>
          </Link>
        </div>
      </div>


      <h2>担当作品</h2>
      <div className="contents">
        <div className="content">
          <Link to="/mycircle">
            <img
              src="https://dummyimage.com/720x480/000/fff"
              alt="自作作品"
            ></img>
            <p>
              text text text text text text text text text text text text text
              text
            </p>
          </Link>
        </div>
        <div className="content">
          <Link to="/circle">
            <img
              src="https://dummyimage.com/720x480/000/fff"
              alt="依頼作品"
            ></img>
            <p>
              text text text text text text text text text text text text text
              text
            </p>
          </Link>
        </div>
      </div>


      <h2>ご依頼はこちら</h2>
      <div className="contents">
        <div className="content">
          <a
            href="https://twitter.com/?lang=ja"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://dummyimage.com/720x480/000/fff" alt="SNS1"id="SNS1"></img>
            <p>
              ご依頼方法１<br></br>※すべて同一のサイトに飛びます。
            </p>
          </a>
        </div>
        <div className="content">
          <a
            href="https://twitter.com/?lang=ja"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://dummyimage.com/720x480/000/fff"alt="SNS2"id="SNS2"></img>
            <p>
              ご依頼方法２<br></br>※すべて同一のサイトに飛びます。
            </p>
          </a>
        </div>
        <div className="content">
          <a
            href="https://twitter.com/?lang=ja"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://dummyimage.com/720x480/000/fff" alt="SNS3"id="SNS3"></img>
            <p>
              ご依頼方法３<br></br>※すべて同一のサイトに飛びます。
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxLeftHome;
