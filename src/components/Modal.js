import CreateTask from "./Forms/CreateTask";


export default function Modal({ month, date, isOpen, onClose }){

        if (!isOpen) return null;
        return (
          <div className="modal">
            <div className="modal-content">
              <h1>{`${date}`}</h1>
              <CreateTask month={month} date={date} onClose={onClose}/>
            </div>
          </div>
        );
      }