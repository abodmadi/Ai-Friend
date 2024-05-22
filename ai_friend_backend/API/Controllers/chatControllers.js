import {spawnSync} from 'child_process'
import ElevenLabs  from 'elevenlabs-node'
import { promises as fs } from 'fs';

const elevenLabsApiKey='ad93bde3e21a20a0474da9b783dcd6c7';
const voiceId='SOYHLrjzK2X1ezoPC6cr';

const Voice = new ElevenLabs ({
    apiKey: elevenLabsApiKey,
    voiceId:voiceId,
});

const execCommand = async (cmd) => {
    // Command with a period
    const command = cmd;
    // Split the command into an array of arguments
    const args = command.split(' ');
    // SpawnSync a new child process
    spawnSync(args.shift(), args);
    
    //const child
    /*// Handle error data from the child process
    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });*/
};

const readJsonTranscript = async (file) => {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
};

const audioFileToBase64 = async (file) => {
    const data = await fs.readFile(file);
    return data.toString("base64");
};

export const index= async (request,response)=>{
    try {
        // ElevenLabs generator (.mp3 file)
        const fileName=('voice'+(new Date().getTime()));
        const filePath=('public/sounds/'+fileName+'.mp3');
        
        const text=request.body['meg'];
        await Voice.textToSpeech({voiceId:voiceId,fileName:filePath,textInput:text});

        // .mp3 to .wav converter (.wav file)
        const mp3File=filePath;
        const wavFile=('public/sounds/'+fileName+'.wav')

        const ffmpegCmd=('ffmpeg -y -i '+mp3File+' '+wavFile);
        await execCommand(ffmpegCmd)

        // rhubarb converter (json file)
        const inputPath=wavFile;
        const outputPath=('public/jsons/'+fileName+'.json');
        const rhubCmd='./bin/rhubarb -f json '+inputPath+' -o '+outputPath;
        await execCommand(rhubCmd);

        console.log(request.body['meg'])
        // note: add fileName in response.
        return response.status(200).json({
            "message":request.body['meg'],
            "fileName":fileName,
            "lepSyncJson":await readJsonTranscript(outputPath),
            "lepSyncSound":await audioFileToBase64(mp3File),
        });
    } catch (error) {
        return response.status(400).json({
            "message":error,
        });
    }
}


export const harryAi= async (request,response)=>{
    console.log(request.body['meg'])
    return response.status(200).json({
        "message":request.body['meg'],
    });
}