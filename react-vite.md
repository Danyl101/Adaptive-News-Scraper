                                    BASH LINES

npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev

cd frontend


                                    NOTES

So any form of react-vite integration requires both a ts(typescript) file and  a python or any language as both apis , the py file takes the backend programs and implements it in web site while the typescript takes any changes the user did in the site and implements it in the backend, 

React also requires these apis(Both python and typescript) to be present inside the src file which is inside frontend file , for access , react cannot access files that are outside the frontend file thats where its scope ends

Most of chatgpts code are written using plain javascript which needs to regularly changed

When trying to debug react , since its not a single file environment and always has multiple imports always check those files alongside the original , most of issues arise from the import files and if chatgpt is required for debugging give it every file that is connected to it , a file that dosent have errors might be causing it 

When declaring variables in a function either follow it , by declaring them as props (interfaces which define their structure) , or inline them by declaring their structure then as there itself ,

When declaring imported variables in main function always give the datatype of them alongside usestate , chatgpt has no context thus dosent recognize it to have a value thus causing the imported variables to have no datatype 



  

