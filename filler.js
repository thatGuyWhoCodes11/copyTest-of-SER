// const subjects=document.querySelector('.subjects')
// const container=document.querySelector('.container')
// const data="Computing ethics\nA Computing ethics course explores the ethical considerations and challenges related to technology. By enrolling, you can expect to learn about privacy, cybersecurity, intellectual property, and social impact, among others.\ncalculus\nA calculus course teaches you the fundamentals of differential and integral calculus, enabling you to find rates of change, slopes of curves, and areas between curves. It equips you with mathematical tools to solve problems involving motion, optimization, and change in various fields, including physics, engineering, and economics.\nsatistics\nA statistics course teaches techniques for collecting, organizing, analyzing, and interpreting data. Students learn concepts like probability, hypothesis testing, regression analysis, and statistical modeling. It helps them understand how to make informed decisions based on data and develop critical thinking skills in quantitative analysis.\nIntroduction to programming\nIntroduction to programming courses provide a foundation for programming concepts and language syntax. Students will learn basic programming fundamentals, such as variables, loops, conditionals, and data structures. By enrolling in this course, you will gain a solid understanding of programming principles and be prepared for more advanced courses."
// const lines=data.split('\n')
// lines.forEach((e,i,a)=>{
//     const copy=subjects.cloneNode(true)
//     if(i%2==0){
//         copy.querySelector('.header').innerHTML=a[i]
//         container.append(copy)
//     }
// })
// let a=0;
// let b=-1;
// for(const e of container.children){
//     if(b%2==0){
//         b++
//     }
//     if(a!=0){
//         e.querySelector('.content').querySelector('.desc').innerHTML=lines[b]
//     }
//     b++;
//     a++;
// }