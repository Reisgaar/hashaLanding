import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpfsService {
  pinataApiKey = environment.pinata_api_key;
  pinataSecretApiKey = environment.pinata_api_secret_key;

  axios = require('axios');

  constructor() { }

  async uploadImage(image: any): Promise<string> {
    console.log(image);
    let imgUri = '';
    const formData = new FormData();
    formData.append('file', image);
    const resFile = await this.axios({
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        data: formData,
        headers: {
          'pinata_api_key': this.pinataApiKey,
          'pinata_secret_api_key': this.pinataSecretApiKey,
          'Content-Type': 'multipart/form-data'
        },
    });
    imgUri = 'https://outerringgovernance.mypinata.cloud/ipfs/' + resFile.data.IpfsHash;
    console.log(imgUri);
    return imgUri;
  }

  async uploadJson(file: any): Promise<string> {
    let jsonUri = '';
    const preData = {
      pinataMetadata: {
        name: 'proposal_' + Date.now().toString()
      },
      pinataContent: file
    };
    const data = JSON.stringify(preData);
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    await this.axios.post(
      url,
      data,
      {
        maxContentLength: 'Infinity',
        headers: {
          'Content-Type': 'application/json',
          'pinata_api_key': this.pinataApiKey,
          'pinata_secret_api_key': this.pinataSecretApiKey
        }
      }
    ).then(res => {
      jsonUri = 'https://outerringgovernance.mypinata.cloud/ipfs/' + res.data.IpfsHash;
      console.log(jsonUri);
    });
    return jsonUri;
  }
}
