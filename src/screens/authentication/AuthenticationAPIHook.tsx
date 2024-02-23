import api from "../../network/api";

interface LogInUserProp {
    loginUsername : string;
    loginPassword : string;
}

interface LoginUserResponse {
    success : boolean;
    errorMessage : string;
    statusCode : string;
    loginResp : any;
}

const loginUser = async ({
    loginUsername,
    loginPassword,
} : LogInUserProp) : Promise<LoginUserResponse> => {
    let success : boolean = false;
    let errorMessage : string = '';
    let statusCode : string = '';
    let loginResp : any;

    console.log("hi");
    console.log(loginUsername);
    const logInPayload = {
        email : loginUsername,
        password : loginPassword,
    };

    try {
        console.log("hi");
        console.log(loginUsername);
        const logInResponse = await api.post('api/v1/userLogin', logInPayload, 
        );

        statusCode = logInResponse.status.toString();

        {
            statusCode ==='200' ? (success = true) : (success = false);
        }

        loginResp = logInResponse.data;
        console.log(loginResp.id);
        console.log(success);
        console.log("hi");
        // if(statusCode === '200')
        //     setStringItem(Constants.IS_LOGIN, 'true');
    } catch(error : any) {
        console.log("Error While Logging In : ", error);
        errorMessage = error.message;
    }
    
    return {success, statusCode, loginResp, errorMessage};
}

export default loginUser;