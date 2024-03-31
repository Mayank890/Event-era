<<<<<<< HEAD:client/src/pages/Ticket.jsx
import React from 'react'
=======
import React from "react";
>>>>>>> f149a3eaf73a802c0d4605c914eae3a3a327f76a:client/src/_root/pages/Ticket.jsx
// import Tech from '../assets/images/a3.jpg'
// import Calender from '../assets/images/uil_calender.svg'
// import Location from '../assets/images/location_red.svg'
// import Code from '../assets/images/Rectangle.png'
export default function Ticket() {
<<<<<<< HEAD:client/src/pages/Ticket.jsx
  function handlePrint(){
    const printContent = document.getElementById('ticketDetails');
=======
  function handlePrint() {
    const printContent = document.getElementById("ticketDetails");
>>>>>>> f149a3eaf73a802c0d4605c914eae3a3a327f76a:client/src/_root/pages/Ticket.jsx
    const originalContents = document.body.innerHTML;
    const printContents = printContent.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  return (
    <div className="mx-8">
<<<<<<< HEAD:client/src/pages/Ticket.jsx
      <p className='font-bold text-2xl text-[#545454] py-2 mb-3'>Download Your E-Ticket</p>
      <div className='w-[912px] flex shadow-2xl box-shadow-xl mx-auto' id='ticketDetails'>
        <div className='w-3/4 inline-flex p-2 border-r'>
          <div className='object-cover'>
            {/* <img src={Tech} alt="tech" className='h-[285px] w-[216px] object-cover'></img> */}
          </div>
          <div className='mx-6 py-1 text-[#616161]'>
            <p className='text-[12px] inline px-1 py-px bg-red-500 text-white rounded-md'>Concert</p>
            <p className='font-bold text-[#545454] text-xl pb-4'>Tuneland - The Music Fest</p>
            <div className='flex gap-x-12 w-full border-b '>
              <div className='flex flex-col'>
                  {/* <p className='flex text-base pb-5'><spam className='pr-1'><img src={Calender} alt='timing'/></spam>Sun, 03 March - 7:00 PM</p> */}
                  <p className='text-sm'>Seat/Section</p><p className='font-bold text-base pb-6'>Nebula Lounge - Section A</p>
                  <p className='text-sm'>Ticket ID</p><p className='font-bold text-base pb-6'>GGFTIX2024-192837</p>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='flex text-base'><spam className='pr-1'><img src={Location} alt='location'/></spam>GIFT City, Gandhinagar</p>
                <spam><p className='text-sm'>Number of Ticket(s)</p><p className='font-bold text-base pb-6'>2</p></spam>
              </div>
            </div>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold py-3'>Total Amount </p>
              <p className='text-xl font-semibold py-3'>Rs. 2998 </p>
            </div>
          </div>
        </div>
        <div className='w-1/4 py-2 px-5 text-right'>
          <div className='justify-end'>
            <p className='text-[12px] inline px-1 py-px bg-[#10A013] justify-right text-white rounded-md'>Confirmed</p>
          </div>
          <div className='w-full h-full py-11 justify-center text-center align-center'>
=======
      <p className="font-bold text-2xl text-[#545454] py-2 mb-3">
        Download Your E-Ticket
      </p>
      <div
        className="w-[912px] flex shadow-2xl box-shadow-xl mx-auto"
        id="ticketDetails"
      >
        <div className="w-3/4 inline-flex p-2 border-r">
          <div className="object-cover">
            {/* <img src={Tech} alt="tech" className='h-[285px] w-[216px] object-cover'></img> */}
          </div>
          <div className="mx-6 py-1 text-[#616161]">
            <p className="text-[12px] inline px-1 py-px bg-red-500 text-white rounded-md">
              Concert
            </p>
            <p className="font-bold text-[#545454] text-xl pb-4">
              Tuneland - The Music Fest
            </p>
            <div className="flex gap-x-12 w-full border-b ">
              <div className="flex flex-col">
                {/* <p className='flex text-base pb-5'><spam className='pr-1'><img src={Calender} alt='timing'/></spam>Sun, 03 March - 7:00 PM</p> */}
                <p className="text-sm">Seat/Section</p>
                <p className="font-bold text-base pb-6">
                  Nebula Lounge - Section A
                </p>
                <p className="text-sm">Ticket ID</p>
                <p className="font-bold text-base pb-6">GGFTIX2024-192837</p>
              </div>
              <div className="flex flex-col justify-between">
                <p className="flex text-base">
                  <spam className="pr-1">
                    <img src={Location} alt="location" />
                  </spam>
                  GIFT City, Gandhinagar
                </p>
                <spam>
                  <p className="text-sm">Number of Ticket(s)</p>
                  <p className="font-bold text-base pb-6">2</p>
                </spam>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-xl font-semibold py-3">Total Amount </p>
              <p className="text-xl font-semibold py-3">Rs. 2998 </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 py-2 px-5 text-right">
          <div className="justify-end">
            <p className="text-[12px] inline px-1 py-px bg-[#10A013] justify-right text-white rounded-md">
              Confirmed
            </p>
          </div>
          <div className="w-full h-full py-11 justify-center text-center align-center">
>>>>>>> f149a3eaf73a802c0d4605c914eae3a3a327f76a:client/src/_root/pages/Ticket.jsx
            {/* <img src={Code} alt='QR' className='mx-auto pb-2'></img>
            <p className='text-sm'>Scan For More Details</p> */}
          </div>
        </div>
      </div>
<<<<<<< HEAD:client/src/pages/Ticket.jsx
      <div className='mt-10 text-center'>
        <button className='px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858] mr-6' onClick={handlePrint}>Print Ticket</button>
        <button className='px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858]' onClick={handlePrint}>Download E-ticket</button>
      </div>
    </div>
  )
=======
      <div className="mt-10 text-center">
        <button
          className="px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858] mr-6"
          onClick={handlePrint}
        >
          Print Ticket
        </button>
        <button
          className="px-5 py-3 border rounded-3xl text-[#ED5858] border-[#ED5858] font-semibold hover:text-white hover:bg-[#ED5858]"
          onClick={handlePrint}
        >
          Download E-ticket
        </button>
      </div>
    </div>
  );
>>>>>>> f149a3eaf73a802c0d4605c914eae3a3a327f76a:client/src/_root/pages/Ticket.jsx
}
