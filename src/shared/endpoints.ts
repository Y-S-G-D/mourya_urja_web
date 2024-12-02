

export const userEndPoint =  '/users';
export const registerUser = `${userEndPoint}/register`
export const preSignedUrl = `${userEndPoint}/presigned-url`
export const getUsers = `/all-users`
export const deleteImage = `${userEndPoint}/delete-file`
export const userProfileById= `${userEndPoint}/profile`
export const totalUsersCount = `${userEndPoint}//totalUsersCount`
export const browseProfiles = `${userEndPoint}/find-new-connections`
export const deleteUser = `${userEndPoint}/delete-user`
export const userApproval = `${userEndPoint}/user-approval`


export const employeeEndPoint =  '/employee';
export const registerEmployeeEndPoint = '/register'
export const employeeProfileEndPoint = `/profile`;
export const deleteEmployee = `/delete-employee`
export const userByEmail = '/user'
export const dashboardInsight = '/dashboard-insights';

// favourite endpoints
export const addToFavroute = `${userEndPoint}/send-proposal`
export const getFavourites = `${userEndPoint}/get-favourites`
export const deleteFavourite = `${userEndPoint}/delete-favourite`
export const acceptProposal = `${userEndPoint}/accept-proposal`

// connection endpoints
export const getConnections = `${userEndPoint}/connections`

// comment endpoints
export const addComment = `${userEndPoint}/add-comment`
export const getComments = `${userEndPoint}/get-comments`


// fetch all employees
export const allEmployeesEndpoint = '/all-employee'

export const loginEndPoint = '/login';