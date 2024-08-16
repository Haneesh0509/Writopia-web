"use client";
import React from 'react'
import Styles from "./FAQs.module.css";


interface FAQ {
	question: string,
	answer: any,
    isDisplayed: boolean
}

const FAQs = () => {
    const [faqs, setFaqs] = React.useState([
        {
            question: "Who is the owner of Writopia?",
            answer: "Writopia is owned by a High School Club known as Union of Friends. There are 6 members in this Union who have equal equal power in the decisions related to this App.",
            isDisplayed: false
        },
        {
            question: "Is Writopia completely Free?",
            answer: "Yes, as of now Writopia is completely free to use for High Schoolers. However, only UoF will be able to upload the stories for now. Writopia will be made entirely Public Soon!",
            isDisplayed: false
        },
        {
            question: "Where is the Open-Source Code located?",
            answer: <>Writopia&apos;s entire code (except the API credentials) are public at on our <a href="https://github.com/Haneesh0509/Writopia-web" target="_blank">GitHub</a>. Any changes and reuse of the code will be accepted. However, if you copy of the entire app we will sue you legally.</>,
            isDisplayed: false
        }
    ]);

    return (
        <ul className={`m-3 ${Styles.faqsContainer}`}>
            {faqs.map((faq: FAQ, i: number) => {
                return <li key={i} className={`${Styles.faq}`}>
                    <div className={`bg-stone-800 py-3 px-2 ${Styles.faqQuestion}`} onClick={() => {
                        console.log("Hi");
                        const temp: FAQ[] = [...faqs];
                        console.log(temp[i]);
                        console.log(faqs[i]);
                        temp[i].isDisplayed = temp[i].isDisplayed === true ? false : true;
                        console.log(temp[i]);
                        setFaqs(temp);
                        console.log(faqs[i]);
                    }}>{faq.isDisplayed?"-":"+"} {faq.question}</div>
                    <div className={`bg-stone-600 py-3 px-2 ${Styles.faqAnswer} ${faq.isDisplayed?Styles.faqAnswerShow:""}`}> {faq.answer}</div>
                </li>
            })}
        </ul>
    )
}

export default FAQs