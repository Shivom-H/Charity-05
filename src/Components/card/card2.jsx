import React from "react";
import Cards from "./component/cards";
import Img01 from "../../resources/images/imgcard3.jpg";

export default function Card2() {
  var array2 = [
    {
      link: Img01,
      title: "Teens Of The Tobacco Fields",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Ipsum, iste hic, suscipit necessitatibus...",
      val: 60.75,
    },
    {
      link: "https://media.istockphoto.com/photos/a-poor-homeless-happy-smiling-orphan-child-picture-id1176766131?s=612x612",
      title: "Clean Water For 15,000 People",
      des: "Recently in Malawi, a six-year-old girl was sexually abused by a 23-year-old man at Chikali Camp...",
      val: 146,
    },
    {
      link: "https://media.gettyimages.com/photos/brazilian-children-at-home-rio-de-janeiro-state-picture-id1018966394?k=20&m=1018966394&s=612x612&w=0&h=kwr-YXSis3ow8VDIn_oRAbicwvdx2Q8IYLFataDhCrs=",
      title: "Gone To Ghana In Africa",
      des: "This is Photoshop's version of Lorem Ipsum Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum",
      val: 16,
    },
  ];

  return (
    <div className="custom-card-bgc">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-around">
            {/* {[
  {link:Img01,
  title:"Teens Of The Tobacco Fields",
  des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fuga. Ipsum, iste hic, suscipit necessitatibus...",
  val:60.75
  },
  { link:"https://media.istockphoto.com/photos/a-poor-homeless-happy-smiling-orphan-child-picture-id1176766131?s=612x612",
  title:"Clean Water For 15,000 People",
  des:"gogntsjoigoighfogjoijdisjfjaodjjojfadoijj",
  val:146
  },
  {link:"https://media.gettyimages.com/photos/brazilian-children-at-home-rio-de-janeiro-state-picture-id1018966394?k=20&m=1018966394&s=612x612&w=0&h=kwr-YXSis3ow8VDIn_oRAbicwvdx2Q8IYLFataDhCrs=",
  title:"Gone To Ghana In Africa",
  des:"foreever",
  val:16
  },

].map(data=>
  <Cards
  link={data.link}
  title={data.title}
  des={data.des}
  val={data.val} />

)

} */}

            {array2.map((data) => (
              <Cards {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
