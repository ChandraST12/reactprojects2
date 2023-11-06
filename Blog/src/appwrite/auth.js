import {Client,Account, ID} from "appwrite"
import conf from '../conf.js'
export class AuthService {
    client =new Client();
    account; 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject);
        this.account =new Account(this.client);
    }

    async createAccount({email,password,name}){
        // eslint-disable-next-line no-useless-catch
        try {
          const userAccount =  await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password});
            }else{
                return;
            }
        }catch (error) {
            console.log("appwrite service::createAccount :: error",error);
        }
    }

    async login({email,password}){
     // eslint-disable-next-line no-useless-catch
     try{
       return  await this.account.createEmailSession(email,password);
     }catch (error) {
        console.log("appwrite service::login :: error",error);
    }
    }

    async getCurrentUser( ){
        try {
           return await this.account.get(); 
        } catch (error) {
            console.log("appwrite service::getCurrentUser :: error",error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service::logout :: error",error);
        }
    }
}



const authService = new AuthService();

export default authService;