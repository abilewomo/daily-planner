export default function Modal({ date, isOpen, onClose }){

        if (!isOpen) return null;
        return (
          <div className="modal">
            <div className="modal-content">
                <form>
                    <h2>{`${date}`}</h2>
                    <p>This should be a form for creating task</p>
                    <button onClick={onClose}>Close</button>
                </form>
            </div>
          </div>
        );
      }