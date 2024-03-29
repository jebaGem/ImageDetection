

    export interface Photo {
        id: string;
        owner: string;
        secret: string;
        server: string;
        farm: number;
        title: string;
        ispublic: number;
        isfriend: number;
        isfamily: number;
        dateupload: string;
        ownername: string;
    }

    export interface Photos {
        page: number;
        pages: number;
        perpage: number;
        total: string;
        photo: Photo[];
    }

    export interface RootPhotos {
        photos: Photos;
        stat: string;
    }



