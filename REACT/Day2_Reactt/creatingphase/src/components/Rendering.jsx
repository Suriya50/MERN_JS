const Rendering = () => {

    // primitive
    const names = "surya"
    const age = 20

    // non-primitive

    //object

    const user = {
        name: "Surya",
        city: "Tiruvannamalai"
    };

    //array of string

    const skills = ["HTML", "CSS", "JS", "React"];

    //   array of object

    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 20000 },
        { id: 3, name: "Headset", price: 3000 }
    ];

    return (


        <>

            <h3 style={{ marginTop: "8px", alignItems: "center", textAlign: "center" }}>2.Create RenderingPlayground component</h3>

            <div style={{textAlign:"center", gap:"12px", display:"flex", flexDirection:"column", marginTop:"10px"}}>

                {/* primitive rendering */}

<h4>primitive</h4>                <h2>name:{names}</h2>
                <h3>age:{age}</h3>

                {/* non primitive */}

                <h4>non-primitive</h4>

                <h4>name:{user.name}</h4>
                <h4>city:{user.city}</h4>

                {/*  */}

                <h3>Skills (Array of Strings)</h3>
                {skills.map((skill, index) => (
                    <p key={index}>
                        {index} : {skill}
                    </p>
                ))}


            

            </div>

<hr />
        </>
    )



}

export default Rendering;