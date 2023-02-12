import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

const fileTypes = ["JPG", "PNG", "GIF"];
const customStyles = {
    content: {
        top: '50%',
        left: '50%',


        marginRight: '-10%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');



const Modal01 = ({ setModalInfo, d01 }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState("");
    const handleChange = (file) => {
        setFile(file);
    };
    // ----------------------------
    const handleFormSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const allergies = form.allergies.value
        const preparation = form.preparation.value
        const coverPhoto = file[0]


        // upload image 
        const picform = new FormData()
        picform.append('image', coverPhoto)
        fetch("https://api.imgbb.com/1/upload?key=e359e9f9cf7174ca1208fff0f342038d", {
            method: 'POST',
            body: picform
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result.data.url)
                const addNewsData = {
                    allergies,
                    preparation,

                    image: result.data.url ? result.data.url : d01.image
                }
                setModalInfo(addNewsData)
                console.log(addNewsData)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }
    //   ---------------------------
    return (
        <div>
            <button onClick={openModal} className='border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-1 mt-2 px-5 font-semibold rounded-2xl'>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >

                <div className=''>

                    <form className="w-full mx-auto " onSubmit={handleFormSubmit}>

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                            ALLERGIES
                        </label>
                        <input defaultValue={d01?.allergies} name='allergies' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="write here..." />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                            PREPARATION
                        </label>
                        <input defaultValue={d01?.preparation} name='preparation' className="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="write here..." />

                        <FileUploader
                            hoverTitle={"drop here"}
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            required
                        />
                        <button className="border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-1 mt-2 px-5 font-semibold rounded-2xl">
                            {
                                loading ? "Loading" : "Submit"
                            }
                        </button>
                        <button onClick={closeModal} className='border-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 py-1 mt-2 px-5 font-semibold rounded-2xl'>Done</button>
                    </form>
                </div>


            </Modal>
        </div>
    );
};

export default Modal01;