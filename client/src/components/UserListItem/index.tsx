import { GetAllUsersDocument, useDeleteUserMutation, useUpdateUserMutation } from "../../generated/graphql";
import UserListItem from "./UserListItem";

export interface Props {
    id: string | undefined,
    firstName: string,
    lastName: string
}

const UserListItemContainer: React.FC<Props> = (props) => {
    const updateMutation = useUpdateUserMutation({
        refetchQueries: [
            { query: GetAllUsersDocument }
        ]
    });

    const deleteMutation = useDeleteUserMutation({
        refetchQueries: [
            { query: GetAllUsersDocument }
        ]
    });

    if (deleteMutation[1].loading) return <div>Loading...</div>;
    if (deleteMutation[1].error) return <div>ERROR</div>;
    if (deleteMutation[1].data) return <div>Delete Successful</div>;

    return <UserListItem 
                updateUser={updateMutation[0]}
                deleteUser={deleteMutation[0]}
                updateData={updateMutation[1].data} 
                {...props} 
            />
}

export default UserListItemContainer;