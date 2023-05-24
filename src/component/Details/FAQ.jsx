import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
 
    rows: [
        {
            title: "What happens if I can’t make a live session?",
            content: `All workshops are recorded and available here in Maven rather quickly.`,
        },
        {
            title: "I work full-time, what is the expected time commitment?",
            content:
                "If you attend all workshops, including the optional ones, it's ~9 hours. Each workshop is planned to be 1-2 hours.   For implementing this on your own software, it will depend on the size of your project, your team, and the complexity of your automation requirements. I'm happy to advise on implementation schedule"
        },
        {
            title: "Must I use Kubernetes and GitHub for this course?",
            content: `yes,While there are many ways to deploy containers and automate software, this course uses my favorite and most recommended combination of Kubernetes + GitHub Actions + Argo CD.



            You can apply these automation ideas and DevOps fundamentals to other tools, but we won't have time to explore them in class.`,
        },
     
    ],
};

const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",

 
    
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
}
function FAQ() {
    return (
        <div className="text-center item-center justify-content-center ">
       
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
    </div>
    )
}

export default FAQ

