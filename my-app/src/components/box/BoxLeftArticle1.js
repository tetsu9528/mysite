import React from 'react'

export const BoxLeftArticle1 = () => {
  return (
    <div className="box-left article">
    <h2 className="article-title">text text text text text text text text text text </h2>
    <img src="https://dummyimage.com/720x480/000/fff"className="article-header" alt="header"></img>

    <div className="start">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem qui tempore amet
            nisi eius minima ipsam? Est dicta accusamus odio laborum ducimus eligendi commodi quod sapiente.
            Dolorem, fugiat dolore!</p>

        <div className="table">
            <h2>目次</h2>
            <ul>
                <li><a href="#index-1">見出し1</a></li>
                <li><a href="#index-2">見出し2</a></li>
                <li><a href="#index-3">見出し3</a></li>
            </ul>
        </div>

        <div className="sentence">
            <h2 id="index-1">見出し1</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, cum et quasi esse nemo
                repudiandae veniam. Eligendi atque fuga odit dignissimos eos iure in pariatur earum, doloremque
                deserunt distinctio ab?</p>

            <h2 id="index-2">見出し2</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, cum et quasi esse nemo
                repudiandae veniam. Eligendi atque fuga odit dignissimos eos iure in pariatur earum, doloremque
                deserunt distinctio ab?</p>

            <h2 id="index-3">見出し3</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, cum et quasi esse nemo
                repudiandae veniam. Eligendi atque fuga odit dignissimos eos iure in pariatur earum, doloremque
                deserunt distinctio ab?</p>
        </div>
    </div>
</div>
  )
}
