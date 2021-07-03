import React,{useEffect, useState} from 'react';
import '../css/timeline.scss'
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {html_title,timeline}from '../components/content/';
import Time from '../components/timeline/';
function Timeline(){
  const {siteConfig} = useDocusaurusContext();
  const [content,setContent] = useState({
    content : timeline,
    english : false,
    html_title:html_title
  });
  //function setEnglish(){
  //  if (content.english===false) {
  //    setContent({
  //      english : true,
  //      content : contents,
  //      url:url0,
  //      tit:title,
  //      bot:bottom,
  //      pic:img,
  //      html_title:html_title2
  //    })
  //  }else{
  //    setContent({
  //      english : false,
  //      content : contents,
  //      url:url1,
  //      tit: title,
  //      bot:bottom2,
  //      pic:img,
  //      html_title:html_title
  //    }
  //    )
  //  }

  //}
  useEffect(()=>{       
    var language = (navigator.browserLanguage || navigator.language).toLowerCase();
   if(language.indexOf('zh')>-1){
       setContent({
        english : false,
        content : timeline,
        html_title:html_title
      });
   }else{
      setContent({
        english : true,
        content : timeline,
        html_title:html_title
      })
    }
  },[setContent])
  return     <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Time pages={content}/>
       </Layout>
}
export default Timeline;
