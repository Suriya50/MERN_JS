

const Dashboard = () => {





const dashdata=JSON.parse(localStorage.getItem("regdatas"))


  return (
   <>

   

  <div className="bg-blue-400 text-white mt-10 w-120 h-50 text-center p-4 rounded ml-140">
   
   <h1 className="bg-black rounded p-3">welcome to my dashboard</h1>

   <div className="bg-green-500 mt-8 rounded">

   <h2>welcome:{dashdata.username}</h2><br />

   <h2>This is my email id:{dashdata.useremail}</h2>
</div>
  

</div>
  </>
  )
}

export default Dashboard