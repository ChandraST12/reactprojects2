import conf from '../conf/conf';
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject);
        this.databases=new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
// change featured image name  
    async createPost({title,slug,content,featuredimage,status,userId}){
        try {
           return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredimage,
                status,
                userId,
            }
           )
        } catch (error) {
            console.log("appwrite service::createpost:: error",error);
        }
    }

    async update(slug,{title,content,featuredimage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
               slug,
               {
                title,
                content,
                featuredimage,
                status,

               }
            )
        } catch(error){
            console.log("appwrite service::update:: error",error);
        }
    }

    async delete({slug}){
        try{
           await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )
           return true;


            } catch(error){
            console.log("appwrite service::delete:: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
               slug
               )
        } catch (error) {
            console.log("appwrite service::getpost:: error",error);
            return false;
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
     try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,

        )
     
    } catch(error){
            console.log("appwrite service::getpost :: active :: error",error);
            return false;
        }
    }

    //file upload service 
    async uploadFile(file){
        try{
          return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
          )
       } catch(error){
            console.log("appwrite service::uploadfile:: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
             return true
        }catch(error){
            console.log("appwrite service::deletefile:: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    }
}
 


const database_service = new DatabaseService()
export default database_service;