import React, {
    useContext,
    useEffect,
    useState} from "react";
import { ComponentContext } from "@teambit/component";
import { useFileContent } from '@teambit/code.ui.queries.get-file-content';
import { useCode } from '@teambit/code.ui.queries.get-component-code';



export function Snacks() {
    const component = useContext(ComponentContext);
    const { loading: loadingCode, fileTree} = useCode(component.id);
    const [url, setUrl] = useState('')
    const [userFiles, setUserFiles] = useState<{fileName:string, userFiles: string}[]>([])

    useEffect(() => {
        if (!loadingCode && fileTree.length === Object.keys(userFiles).length) {
            console.log('code.fileTree--->',fileTree)
           const componentsToRender = fileTree.map((fileName,idx) => ({fileName, userFiles: userFiles[idx]})).filter((item) => !item?.fileName?.endsWith('.docs.mdx') && !item?.fileName?.endsWith('.spec.tsx'));
            const files = {}
            componentsToRender.map((item) =>  {
                if (item.fileName.startsWith('index')) return;
                files[item.fileName.endsWith('composition.tsx') ? 'App.tsx' :item.fileName] = {
                    type: 'CODE',
                    contents: item.userFiles
                }
            });
            console.log("FILES>>>>>>>>>>", JSON.stringify(files))
            setUrl(`https://snack.expo.dev/embedded/?files=${encodeURIComponent(JSON.stringify(files))}&preview=true&platform=android&name=${component.displayName}`);
        }

    },[userFiles])

    const onFileLoad = (fileContent,idx) => {
        setUserFiles({...userFiles, [idx]: fileContent})
    }
    return (
        <div>
            {loadingCode ? "loading files" :
                fileTree.map((df,idx) => <RenderDevFiles key={idx} idx={idx} onFileLoad={onFileLoad} component={component} df={df}  />)
            }
            {
                url !== '' ? <iframe
                    className=""
                    src={url}
                    title="iframe Example 1"
                    width="1000"
                    height="1000">
                </iframe>: <></>
            }
            {/*loadingCode ? "loading dependencies..." :
                code.dependencies.map(d => {
                    return <div>name: {d.id}, version: {d.version}</div>
                })*/}
            </div>
    );
}


const RenderDevFiles = (props: any) => {
    const {component, df,idx} = props;
    const { fileContent, loading } = useFileContent(component.id, df);
    useEffect(() => {
        if (!loading) {
            props.onFileLoad(fileContent,idx)
        }
    },[loading])
    return (
        <div style={{paddingBottom: 0}} key={df}>

        </div>
    )
}


// import React, {
//     useContext,
//     useEffect,
//     useState,
//     useMemo,
//     useRef,
//     ReactNode,
// } from "react";
// import { ComponentContext } from "@teambit/component";
// import { useFileContent } from '@teambit/code.ui.queries.get-file-content';
// import { useCode } from '@teambit/code.ui.queries.get-component-code';
// // import { CompositionContextProvider } from "@teambit/compositions.ui.hooks.use-composition";
// import {
//     SplitPane,
//     Pane,
//     Layout,
// } from "@teambit/base-ui.surfaces.split-pane.split-pane";
// import { FileContent } from '@my-org/tasks-scope.file-content';
// import styles from "./compositions.module.scss";

// export function Snacks() {
//     const component = useContext(ComponentContext);
//     const code = useCode(component.id);
//     const loadingCode = code.loading;
//     console.log("code", code);

//     return (
//         <div>
//             {loadingCode ? "loading files" :
//                 code.devFiles.map(df => {
//                     return (
//                         <FileContent fileName={df} componentId={component.id} />
//                     )
//                 })
//             }

//             Dependencies:
//             {loadingCode ? "loading dependencies..." :
//                 code.dependencies.map(d => {
//                     return <div>name: {d.id}, version: {d.version}</div>
//                 })}
//             // </div>
//     );
// }
