import { GetAllUsersDocument, useCreateUserMutation } from '../../generated/graphql';
import UserForm from './UserForm';

const UserFormContainer = () => {
    const [createUser, {loading, error, data}] = useCreateUserMutation({
        refetchQueries: [
            { query: GetAllUsersDocument } 
        ]
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>ERROR</div>;
    if (data) return <div>User Created Successfully</div>;

    return <UserForm createUser={createUser} />;
};

export default UserFormContainer;