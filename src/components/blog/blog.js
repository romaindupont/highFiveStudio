import React, { useEffect, useState } from 'react';
import './blog.scss';
import Logo from '../../assets/images/LogoH5S.svg';


const Blog = () => {
  const [articles, setArticles] = useState([])
  const [ number, setNumber ] = useState(0);
  const [ tooltip, setTooltip ] = useState(false);
  const wheelCarrousel2 = (e) => {
		const main2 = document.querySelector('.blog');
		main2.scrollLeft += e.deltaY;
    if (e.type === 'click') {
      setNumber(number+1);
      scrollCarrouselCardFoward(e, number+1);
    }
		if (e.deltaX > 0) {
        if (number > articles.length) {

        } else {
          setNumber(number+1);
          scrollCarrouselCardFoward(e, number);
        }
		}
		if (e.deltaX < 0) {
      if (number < articles.length) {

      } else {
        setNumber(number-1);
				scrollCarrouselCardBack(e, number);
      }
		}
	}
  const scrollCarrouselCardFoward = (e, number) => {
		const menuList = [];
		const ulElement = document.querySelector(".realisations-list-3");
		const liElement = ulElement.querySelectorAll(".realisations-item-3");
		menuList.push(liElement);
		menuList[0][number].style.opacity = 1;
    menuList[0][number].style.visibility = 'visible';
		menuList[0][number].style.transition = 'right 1s ease-in 0s'; 
	}
	const scrollCarrouselCardBack = (e, number) => {
   
		const menuList = [];
		const ulElement = document.querySelector(".realisations-list-3");
		const liElement = ulElement.querySelectorAll(".realisations-item-3");
		menuList.push(liElement);
    if (menuList[0][number] !== undefined) {
      menuList[0][number].style.opacity = 0;
      menuList[0][number].style.visibility = 'hidden';
      menuList[0][number].style.transition = 'right 1s ease-in 0s';
    }

	}
  useEffect(() => {
    fetch("http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [])
  useEffect(() => {
    if (number > 0) {
      const ulElement = document.querySelector(".realisations-list-3");
      const item = ulElement.querySelector(`.realisations-item-3:nth-child(${number})`);
      let rotation = ((number - 1) / (articles.length - 1)) - 0.5;
      rotation = rotation * 25;
      item.style.transform = `scale(1) rotate(${rotation}deg)`;
    }
  }, [number, articles.length])
  return (
    <section className="section parallax green" id='blog'>
    <article className="blog" onWheel={wheelCarrousel2}>
      <ul className="realisations-list-3" >
        <li className="realisations-item-3">
          <img src={Logo} alt="logo-HighFiveStudio" />
          <div className="blog-infos" onMouseOver={() => setTooltip(!tooltip)} onClick={(e) => wheelCarrousel2(e)}>
            <span className={!tooltip ? "tooltips" : "tooltips tooltips-appear"}>Scroll à droite</span>
            <p className="blogPage1">Blog</p>
            <p className="scrollForMore">{'\u25C0'}</p>
          </div>
        </li>
        {articles.map((article, i) => 
        <li key={i} className="realisations-item-3">
          <h2 className='blog-title'>{article.title.rendered}</h2>
          <p className='blog-content'>{article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</p>
          <a href={article.link} className='blog-link' rel="noreferrer"  target="_blank">Lire la suite ...</a>
          <div className="blog-next"><span className="back-direction" onClick={(e) => scrollCarrouselCardBack(e, number+1)}>{'\u25C0'}</span><span className="next-direction" onClick={(e) => scrollCarrouselCardFoward(e, number+1)}>{'\u25C0'}</span></div>
       </li>
      )}
      </ul>
      {/* <img src="http://127.0.0.1/highFiveSite/wordpress/wp-content/uploads/2023/11/IMG_0085-1.jpg" alt="" className='blog-img'/>
      <h2 className="blog-title">Bonjour</h2>
      <p className="blog-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid est accusamus ea nesciunt repellat assumenda ipsam quas nobis? Assumenda totam distinctio quisquam ad deleniti rerum in a iste cum earum natus corporis laudantium fugit, fuga doloremque, cumque perferendis eveniet ab. Vitae harum qui exercitationem magnam a adipisci saepe veritatis!</p>
      <a href="http://" className='blog-link' rel="noreferrer"  target="_blank">Lire la suite ...</a> */}
    </article>

    </section>
  );
}
export default Blog;

/* http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts */

/* {
  "id": 36,
  "date": "2023-11-09T21:34:39",
  "date_gmt": "2023-11-09T20:34:39",
  "guid": {
  "rendered": "http://127.0.0.1/highFiveSite/wordpress/?p=36"
  },
  "modified": "2023-11-09T21:34:39",
  "modified_gmt": "2023-11-09T20:34:39",
  "slug": "nouvelle-article",
  "status": "publish",
  "type": "post",
  "link": "http://127.0.0.1/highFiveSite/wordpress/nouvelle-article/",
  "title": {
  "rendered": "Nouvelle Article !"
  },
  "content": {
  "rendered": "\n<p>GogoGo réservé votre séance, en plus Anthony vous prévoit quelques infos sur la nutrition !</p>\n\n\n\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis maxime sit adipisci quam quidem mollitia laudantium itaque consequuntur eos, delectus, iste possimus voluptatum. Dignissimos pariatur labore ducimus, itaque impedit nesciunt et voluptates? Quia fuga quaerat necessitatibus odio ducimus. Provident unde commodi, repellendus quis consequatur sapiente cupiditate quaerat eius deserunt veritatis, iste, asperiores vero exercitationem quia ipsum magnam ratione architecto impedit dolores! Harum accusantium itaque, cumque deserunt voluptates nam aut perspiciatis optio pariatur blanditiis esse nisi excepturi eos omnis molestias modi impedit tempora sapiente, neque, voluptatum ipsa ea. Sed sit error beatae reprehenderit ad. Enim cumque sunt, fugiat corporis illo quaerat obcaecati, aut nam minima tempore omnis voluptatum. Rerum rem delectus asperiores minus, repellat nesciunt! Labore voluptatum cumque, rerum, reprehenderit iste perspiciatis modi quod libero aperiam ratione dolorum dolor voluptate ullam nihil minus et hic cupiditate delectus quaerat ipsa architecto officia id. Optio, pariatur dolorem facere omnis eaque vel autem architecto dolor nisi molestiae aliquid aut quasi laudantium porro sint ad ea deserunt reiciendis suscipit, ducimus maiores incidunt atque hic dolores? Itaque cumque excepturi sequi optio explicabo voluptates, mollitia voluptatem cupiditate, aspernatur minus, unde eum. Voluptas ad eum quaerat? Laboriosam veritatis debitis, consectetur explicabo labore perspiciatis ab, dignissimos quaerat harum ducimus eius voluptate vitae rem. Animi expedita fugit quisquam maxime qui laboriosam facere explicabo, error laborum natus a dicta aut itaque est perspiciatis exercitationem corrupti, incidunt illo quia! Harum obcaecati voluptas nisi facilis, reiciendis a sequi optio possimus dolorum nemo cumque nobis voluptatum tempora maiores reprehenderit odio corrupti eos error? At, molestias atque. Delectus eius nostrum exercitationem labore consequuntur quam libero voluptates autem! Error assumenda vero commodi, illum provident fuga ut libero quis aut impedit doloribus numquam non illo recusandae, animi sapiente hic quaerat praesentium est vel dicta accusantium in excepturi. Recusandae, quia ad fuga quisquam porro enim quos eveniet.</p>\n\n\n\n<figure class=\"wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex\">\n<figure class=\"wp-block-image size-large\"><img loading=\"lazy\" decoding=\"async\" width=\"1134\" height=\"2016\" data-id=\"37\" src=\"http://127.0.0.1/highFiveSite/wordpress/wp-content/uploads/2023/11/IMG_0085-1.jpg\" alt=\"\" class=\"wp-image-37\"/></figure>\n</figure>\n",
  "protected": false
  },
  "excerpt": {
  "rendered": "<p>GogoGo réservé votre séance, en plus Anthony vous prévoit quelques infos sur la nutrition ! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis maxime sit adipisci quam quidem mollitia laudantium itaque consequuntur eos, delectus, iste possimus voluptatum. Dignissimos pariatur labore ducimus, itaque impedit nesciunt et voluptates? Quia fuga quaerat necessitatibus odio ducimus. Provident [&hellip;]</p>\n",
  "protected": false
  },
  "author": 1,
  "featured_media": 0,
  "comment_status": "closed",
  "ping_status": "open",
  "sticky": false,
  "template": "",
  "format": "standard",
  "meta": {
  "footnotes": ""
  },
  "categories": [
  1
  ],
  "tags": [],
  "acf": [],
  "_links": {
  "self": [
  {
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts/36"
  }
  ],
  "collection": [
  {
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts"
  }
  ],
  "about": [
  {
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/types/post"
  }
  ],
  "author": [
  {
  "embeddable": true,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/users/1"
  }
  ],
  "replies": [
  {
  "embeddable": true,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/comments?post=36"
  }
  ],
  "version-history": [
  {
  "count": 1,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts/36/revisions"
  }
  ],
  "predecessor-version": [
  {
  "id": 38,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/posts/36/revisions/38"
  }
  ],
  "wp:attachment": [
  {
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/media?parent=36"
  }
  ],
  "wp:term": [
  {
  "taxonomy": "category",
  "embeddable": true,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/categories?post=36"
  },
  {
  "taxonomy": "post_tag",
  "embeddable": true,
  "href": "http://127.0.0.1/highFiveSite/wordpress/wp-json/wp/v2/tags?post=36"
  }
  ],
  "curies": [
  {
  "name": "wp",
  "href": "https://api.w.org/{rel}",
  "templated": true
  }
  ]
  }
  }, */