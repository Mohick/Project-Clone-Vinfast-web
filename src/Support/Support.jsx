import './Support Max-width 600px.css'

function Support() {
  return (
    <div id="support">
      <div className="support__container">
        <div className='support__box--image'>
          <img width={"100%"} src="./support/iconneo_phukien.png" alt="" />
        </div>
        <div className='support__box--image'>
          <img width={"100%"} height={'100%'} src="./support/chat with ai.png" alt="" />
        </div>
      </div>
    </div>
  );
}


export default Support;