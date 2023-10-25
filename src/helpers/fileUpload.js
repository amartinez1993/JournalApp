

export const fileUpload = async( file ) => {
    if ( !file ) throw new Error('No file selected');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dt4gbs7uw/upload';
    
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp);
        if ( !resp.ok ) throw new Error('The image could not be uploaded')

        const cloudResp = await resp.json();

        console.log({cloudResp});

        return cloudResp.secure_url;

    } catch (error) {
        console.log(error)
        throw new Error( error.message );
    }

}