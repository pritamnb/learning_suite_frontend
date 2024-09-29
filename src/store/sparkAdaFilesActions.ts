
import axios from 'axios';
import { AppDispatch } from './index';
import {
    runSparkAdaFilesRequest,
    runSparkAdaFilesSuccess,
    runSparkAdaFilesFailure,
} from './sparkAdaFilesReducer';
import { configs } from '../config/config';
const { endpoint } = configs;
export const runSparkAdaFiles = (
    specFile = 'main.ads',
    bodyFile = 'main.adb',
    specFileContent: string | any,
    bodyFileContent: string | any,
    verificationLevel: string,
    exe = 'examine'
) => async (dispatch: AppDispatch) => {
    try {
        dispatch(runSparkAdaFilesRequest());

        const formData = new FormData();

        // Check if specFileContent exists and append accordingly
        if (specFileContent) {
            formData.append('specFile', new Blob([specFileContent], { type: 'text/plain' }), specFile);
        }

        // Check if bodyFileContent exists and append accordingly
        if (bodyFileContent) {
            formData.append('bodyFile', new Blob([bodyFileContent], { type: 'text/plain' }), bodyFile);
        }

        formData.append('verificationLevel', verificationLevel);

        const response = await axios.post(`${endpoint}/api/${exe}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        dispatch(runSparkAdaFilesSuccess(response.data.output));
    } catch (error: any) {
        dispatch(
            runSparkAdaFilesFailure({
                error: error.message,
                details: error.response ? error.response.data : 'No additional error details',
            })
        );
    }
};
