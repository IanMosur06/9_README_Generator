// function for readme template, and it's values from the index.js questions.
function generateMarkdown(data){
    return `# ${data.project}

## Description
    ${data.description}
## Table of Contents

    - Usage
    - Installation
    - Credits
    - License
    - Contact Me
    

## Usage 
    ${data.usage}
### Testing
    ${data.test}
## Installation
    ${data.dependency}
## Credits
    ${data.contributions}
## License
    ${displayLicense(data)}
## Contact Me
    Creator: ${data.fname}
    Github: ${data.username}
    Email: ${data.email}
    `
}


//  function to determine the input of the user for which license, then plugs it into the readme.
displayLicense = function (responses){
    const input = responses.license;
    if(typeof input === 'string'){
        switch(input){
            case 'MIT':
                response = `The MIT License (MIT)
                Copyright © 2022 [COPYRIGHT OWNER]
                
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
                return response;
                break;
            case 'Apache':
                response = `Copyright [yyyy] [name of copyright owner]

                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at
                
                    http://www.apache.org/licenses/LICENSE-2.0
                
                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                See the License for the specific language governing permissions and
                limitations under the License.`
                return response;
                break;
            case 'BSD':
                response = `Copyright <YEAR> <COPYRIGHT HOLDER>

                Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                
                1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                
                2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                
                3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                
                THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
                return response;
                break;
            case 'No License':
                response = ` No License`;
                return response;
                break;
                
            
        };
    };
};

// exports generateMarkdown function to index.js
module.exports = generateMarkdown;