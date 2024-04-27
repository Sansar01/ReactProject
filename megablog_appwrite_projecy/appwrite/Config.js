import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class service {
   client = new Client();
   account;
   databases;
   bucket;

   constructor() {
      this.client
         .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
         .setProject(import.meta.env.VITE_PROJECT_ID);
      this.account = new Account(this.client);
      this.databases = new Databases(this.client);
      this.bucket = new Databases(this.client);
   }

   async createPost({ title, slug, featuredImage, content, status, userId }) {
      try {
         return await this.databases.createDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            slug,
            { title, featuredImage, content, status, userId }
         );
      } catch (error) {
         console.log("Appwrite service::createPost::error", error);
      }
   }

   async updatePost(slug, { title, featuredImage, content, status }) {
      try {
         return await this.databases.updateDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            slug,
            { title, featuredImage, content, status }
         );
      } catch (error) {
         console.log("Appwrite service::updatePost::error", error);
      }
   }

   async deletePost(slug) {
      try {
         await this.databases.deleteDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            slug
         );

         return true;
      } catch (error) {
         console.log("Appwrite service::deletePost::error", error);
         return false;
      }
   }

   async getPost(slug) {
      try {
         return await this.databases.getDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            slug
         );
      } catch (error) {
         console.log("Appwrite service::getPost::error", error);
         return false;
      }
   }

   async getPosts(queries = [Query.equal("status", "active")]) {
      try {
         return await this.databases.getDocument(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_COLLECTION_ID,
            queries
         );
      } catch (error) {
         console.log("Appwrite service::getPosts::error", error);
         return false;
      }
   }

   // file upload service

   async uploadFile(file) {
      try {
         return await this.bucket.createFile(
            conf.import.meta.env.VITE_BUCKET_ID,
            Id.unqiue(),
            file
         );
      } catch (error) {
         console.log("Appwrite service::uploadFile::error", error);
         return false;
      }
   }

   async deleteFile(fileId) {
      try {
         return await this.bucket.deleteFile(conf.import.meta.env.VITE_BUCKET_ID, fileId)
         return true
      }
      catch (error) {
         console.log("Appwrite service::deleteFile::error", error);
         return false;
      }
   }

   getFilePreview(fileId) {
      return this.bucket.getFilePreview(conf.import.meta.env.VITE_BUCKET_ID, fileId);
   }
}
