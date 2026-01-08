const About=()=>{

    const abouts="Hi, I’m Surya, a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React, and I enjoy transforming ideas into interactive digital experiences. I focus on writing clean, efficient code and following best practices to build high-quality projects. I am always eager to learn new technologies and take on challenges that help me grow as a developer. My goal is to create web applications that are not only functional but also engaging and visually appealing."
return(
    <>
    <section id="about">
    <center>
    <div style={{color:"pink",marginTop:"5px"}}>
        <h1>ABOUT</h1>
    </div>
    </center>

    <div className="abchild1">
        <h3>{abouts}</h3>
    </div>

    </section>
    
    
    </>
)




}

export default About;