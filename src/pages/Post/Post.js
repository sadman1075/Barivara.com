import React, { useContext, useState } from 'react';
import home from '../../images/home.jpg'
import { Authcontext } from '../../Context/Context';
import toast from 'react-hot-toast';

const Post = () => {
    const [error, seterror] = useState(false)
    const [perror, setperror] = useState(false)
    const { user } = useContext(Authcontext)
    const handlepost = event => {

        event.preventDefault();
        const form = new FormData(event.target)
        const img1 = form.get('img1');
        const name = form.get('name');
        const phone = form.get('phone')
        const city = form.get('city')
        const street = form.get('street')
        const address = form.get('address')
        const room = form.get('room')
        const price = form.get('price')

        if (!/(?=.*?[0-9])/.test(phone)) {
            return seterror("Only Numbers Required")

        }
        if (/(?=.*?[A-Z])/.test(phone)) {
            return seterror("Only Numbers Required")

        }
        if (/(?=.*?[a-z])/.test(phone)) {
            return seterror("Only Numbers Required")

        }
        if (/(?=.*?[#?!@$%^&*-])/.test(phone)) {
            return seterror("Only Numbers Required")

        }
        if (!/.{11,}/.test(phone)) {
            return seterror("Phone Number is Invalid")

        }


        if (!/(?=.*?[0-9])/.test(price)) {
            return setperror("Only Numbers Required")

        }
        if (/(?=.*?[A-Z])/.test(price)) {
            return setperror("Only Numbers Required")

        }
        if (/(?=.*?[a-z])/.test(price)) {
            return setperror("Only Numbers Required")

        }
        if (/(?=.*?[#?!@$%^&*-])/.test(price)) {
            return setperror("Only Numbers Required")

        }
        if (!/.{3,}/.test(price)) {
            return setperror("Phone Number is Invalid")

        }


        seterror("");
        setperror("");






        // const img2=form.get('img2');
        // const img3=form.get('img3');
        // const img4=form.get('img4');
        // const img5=form.get('img5');
        // const img6=form.get('img6');

        console.log(img1)
        const data1 = new FormData()
        // const data2=new FormData()
        // const data3=new FormData()
        // const data4=new FormData()
        // const data5=new FormData()
        // const data6=new FormData()
        data1.append("image", img1)
        // data2.append("image",img2)
        // data3.append("image",img3)
        // data4.append("image",img4)
        // data5.append("image",img5)
        // data6.append("image",img6)


        fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893', {
            method: "POST",
            body: data1,
        })
            .then(res => res.json())
            .then(data1 => {
                console.log(data1)
                const posts = {
                    name: name,
                    Phone_No: phone,
                    email:user.email,
                    city: city,
                    address: address,
                    street: street,
                    roomDetails: room,
                    image: data1.data.display_url,
                    price: price




                }
                fetch('http://localhost:5000/post', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(posts)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success("Your post successfully created");
                    })
            })



        // fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893',{
        //     method:"POST",
        //     body:data2,
        // })
        // .then(res=>res.json())
        // .then(data2=>console.log(data2))
        // fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893',{
        //     method:"POST",
        //     body:data3,
        // })
        // .then(res=>res.json())
        // .then(data3=>console.log(data3))
        // fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893',{
        //     method:"POST",
        //     body:data4,
        // })
        // .then(res=>res.json())
        // .then(data4=>console.log(data4))
        // fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893',{
        //     method:"POST",
        //     body:data5,
        // })
        // .then(res=>res.json())
        // .then(data5=>console.log(data5))
        // fetch('https://api.imgbb.com/1/upload?key=6d3d96ae47f5c89cb95a9fffaf369893',{
        //     method:"POST",
        //     body:data6,
        // })
        // .then(res=>res.json())
        // .then(data6=>console.log(data6))





    }
    return (


        <div>
            <div className="hero mt-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="hidden lg:w-1/2 lg:block">
                        <img width={'1000px'} alt='' src={home}></img>
                    </div>
                    <div className="card shrink-0 w-full lg:w-1/2 ">

                        <form onSubmit={handlepost}>
                            <h1 className='text-5xl font-bold text-center'>Post For Tolet</h1>

                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='emaill' defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Phone No</span>
                                </label>
                                <input type="text" name='phone' placeholder="Phone NO" className="input input-bordered" required />
                                <p className='text-red-600 text-center '>{error}</p>
                            </div>

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <select name='city' className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select City</option>
                                    <option>Dhaka</option>
                                    <option>Rangpur</option>
                                    <option>Faridpur</option>
                                    <option>Madaripur</option>
                                    <option>Khulna</option>
                                    <option>Barisal</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Street No And Apartment no</span>
                                </label>
                                <input type="text" name='street' placeholder="Street no and Apartment no" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Room Details</span>
                                </label>
                                <input type="text" name='room' placeholder="bed room,belkoney,washroom,kitchen" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Room Bed 1</span>
                                </label>
                                <input type="file" multiple name='img1' className="file-input file-input-bordered w-full max-w-xs" />
                            </div>

                            {/* <div className="form-control ">
        <label className="label">
            <span className="label-text">Room Bed 2</span>
        </label>
        <input type="file" name='img2' className="file-input file-input-bordered w-full max-w-xs" />                
        </div>

</div>
<div className='w-1/2 mx-auto lg:flex justify-center gap-4'>
    <div className="form-control ">
        <label className="label">
            <span className="label-text">Room Bed 3</span>
        </label>
        <input type="file" name='img3' className="file-input file-input-bordered w-full max-w-xs" />               
         </div>
    <div className="form-control ">
        <label className="label">
            <span className="label-text">WashRoom</span>
        </label>
        <input type="file" name='img4' className="file-input file-input-bordered w-full max-w-xs" />                
        </div>

</div>
<div className='w-1/2 mx-auto lg:flex justify-center gap-4'>
    <div className="form-control ">
        <label className="label">
            <span className="label-text">Kitchen</span>
        </label>
        <input type="file" name='img5' className="file-input file-input-bordered w-full max-w-xs" />               
         </div>
    <div className="form-control ">
        <label className="label">
            <span className="label-text">Veranda</span>
        </label>
        <input type="file" name='img6' className="file-input file-input-bordered w-full max-w-xs" />               
         </div>

</div> */}

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>


                                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                                <p className='text-red-600 text-center '>{perror}</p>

                            </div>

                            <div className="mt-6 form-control">
                                <button className="btn bg-gray-700 text-white">Post</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Post;