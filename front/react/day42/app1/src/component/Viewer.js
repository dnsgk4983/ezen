const Viewer = (props) => {
    return (
        <div>
            <div className="d-flex">고양이 <h1>{props.count}</h1><span>마리</span></div>
        </div>
    )
}

export default Viewer;