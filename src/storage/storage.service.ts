import { storage } from '../utils/storage';
const bucket = 'documents';
const storageService = {
  async listBuckets() {
    const { data, error } = await storage.listBuckets();
    if (error) {
      throw new Error().message = error.message;
    }
    return data;
  },

  async createBucket(name: string) {
    const { data, error } = await storage.createBucket(name, { public: true});
    if (error) {
      console.log(error);
      
      throw new Error().message = error.message;
    }
    return data;
  },

  async uploadFile(file: any) {
    return await storage.from(bucket).upload(`docs/${file.filename}.pdf`,file);
  }
};

export default storageService;