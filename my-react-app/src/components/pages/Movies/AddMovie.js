import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./AddMovie.css"
function AddMovie(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return(
        <div>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal  title="Add Movie" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <label for="movie">Movie Name</label>
        <input name="movie" className='movie-name'/>
        <label>Movie Description</label>
        <textarea className='movie-des'></textarea>
       <div>
        <label>Movie Duration(mins)</label>
        <input></input>
        <label>Language</label>
        <input></input>
        <label>Movie Release Date</label>
        <input type="date"></input>
        <div className="movie-footer">
        <label>Genre</label>
        <input></input>
        <label>Poster Url</label>
        <input></input>
        </div>

        </div>
      </Modal>  
        </div>
    )
}

export default AddMovie;