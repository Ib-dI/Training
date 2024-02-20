console.log('connected')

const dataList = [...document.querySelectorAll('.data')]

dataList.forEach((item) => item.addEventListener('click', dataAnimation))

function dataAnimation(e) {

    const indexRemove = dataList.findIndex(item => item.classList.contains('active-data'))
    const indexToShow = dataList.indexOf(e.target)

    
    dataList[indexRemove].classList.remove('active-data')

    dataList[indexToShow].classList.add('active-data')

}