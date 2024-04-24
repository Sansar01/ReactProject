import {Client, Account,Id} from 'appwrite'

class AuthService{

    client = new Client();
    account;

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    }
}

const authService = new AuthService();

export default authService;
