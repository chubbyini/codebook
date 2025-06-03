import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services" 
import { useTitle } from "../../Hooks/useTitle"
import { toast } from "react-toastify"

export const DashboardPage = () => {
  
  const [orders,setOrder]=useState([])
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  useTitle("Dashboard");

  useEffect(()=>{
    async function fetchOrders() {
      try{const data=await getUserOrders();
        setOrder(data);
      }catch(error){
        toast.error(error.message,{
                  closeButton:true,
                  autoClose:5000,
                  closeOnClick:true});
      }
       
    }
    fetchOrders();
  },[cbid,token])
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
        {orders.length && orders.map((order)=>(
            <DashboardCard  key={order.id} order={order} />
        )) }
      </section>
      <section>
        {!orders.length>0 && <DashboardEmpty />}
      </section>
    </main>
  ) 
}
