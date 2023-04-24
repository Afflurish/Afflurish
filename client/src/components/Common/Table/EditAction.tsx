import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface EditActionProps {
    onEdit?: React.MouseEventHandler
};

function EditAction({ onEdit }: EditActionProps) {

    const hoverClass = `
        hover:cursor-pointer hover:transition-all hover:bg-[#00ff3c]/40
    `;

    return(
        <div 
            className={`
                bg-neutral-600 rounded-full text-center p-1 w-8 ${hoverClass}
            `} 
            onClick={onEdit}
        >
            <FontAwesomeIcon icon="pen" />
        </div>
    );
};

export default EditAction;