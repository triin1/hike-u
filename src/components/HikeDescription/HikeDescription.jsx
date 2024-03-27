function HikeDescription({updateHikeState}) {

    const _handleChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value
        updateHikeState({[name]: value})
    }

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input onChange={_handleChange} name="title" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the title in here" />
            </div>
            <div className="mb-3">
                <label className="form-label">Hike description</label>
                <textarea onChange={_handleChange} className="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
}

export default HikeDescription;