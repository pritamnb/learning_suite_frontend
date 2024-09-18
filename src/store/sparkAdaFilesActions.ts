import axios from 'axios';
import { AppDispatch } from './index';
import {
    runSparkAdaFilesRequest,
    runSparkAdaFilesSuccess,
    runSparkAdaFilesFailure,
} from './sparkAdaFilesReducer';

export const runSparkAdaFiles = (
    specFileContent: string | any,
    bodyFileContent: string | any,
    verificationLevel: string
) => async (dispatch: AppDispatch) => {
    try {
        dispatch(runSparkAdaFilesRequest());

        const formData = new FormData();
        formData.append('specFile', new Blob([specFileContent], { type: 'text/plain' }), 'main.ads');
        formData.append('bodyFile', new Blob([bodyFileContent], { type: 'text/plain' }), 'main.adb');
        formData.append('verificationLevel', verificationLevel);

        const response = await axios.post('http://localhost:8000/api/prove', formData, {
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
