// let countries = {
//     Afghanistan: [
//       "Herat",
//       "Kabul",
//       "Kandahar",
//       "Molah",
//       "Rana",
//       "Shar",
//       "Sharif",
//       "Wazir Akbar Khan",
//     ],
//     Albania: [
//       "Elbasan",
//       "Petran",
//       "Pogradec",
//       "Shkoder",
//       "Tirana",
//       "Ura Vajgurore",
//     ],
//   };
  
//   1.Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
//   2.Ən çox şəhəri olan ölkə adını return edən funksiya yazın
//   3.Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya
//   4.Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}


//    console.log(Object.entries(countries))
//     if(Object.entries(countries)[1].length>Object.entries(countries)[2].length){
// console.log("aa")
//     }

// console.log(Object.values(countries))
// 1. iKi arrayi birləşdir
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9]
// const array =arr1.concat(arr2)
// console.log(array);


// 2. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]
// let array=[]
// function task2(a,b) {
//   for (let i = 0; i < a; i++) {
//     array.push(b)
    
//   }
//   console.log(array)
// }

// task2(4,0)




// 3. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
//  3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]
// y=0
// function task3(a,b,c) {
  
// let element = a[b]
// a.splice(b, 1);
// a.splice(c, 0, element );
// return a;
// }
// console.log(task3([4,6,7,8],0,2))

// 4. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// Məsələn:
// console.log(range(1, 4));
// Expected Output:
// [1, 2, 3, 4]
// array=[]
// function task4(a,b){
// for (let i = a; i < b+1; i++) {
//    array.push(i)
    
// }

// }

// task4(10,45)
// console.log(array)





// 5.Daxil edilən arraydə təkrarlanan elementi silin və yeni array qaytarın.
// Məsələn:
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]
// let array1=[...new Set(array)]
// console.log(array1)
// let array2=[]
// function task5(a){
// for (let i = 0; i < a.length; i++) {
//     if(!array2.includes(a[i])){
// array2.push(a[i])
//     }
    
// }
// return array2;
// }

// console.log(task5([1, 2, 2, 3, 4, 4, 5]));







// 6. Daxil olunan arraydə əgər bütün rəqəmlər təkdirsə true, cütdürsə false qaytaran funksiya yazın.

//  ([3,5]) -> true     ([2,4,12,6,10,8]) -> false
Array=[]
function task6(a) {
    for (let i = 0; i < a.length; i++) {
        if(a[i]%2!=0){
            Array.push(a[i])
        }
       
    }
return a.length==Array.length
}

console.log(task6([3,5]))
// 7. Daxil edilən iki arraydə fərqli olan elementləri qaytaran funksiya yazın.
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Expected Output:
// [3, 10, 100]



// 8. İçərisində HTML,CSS,Javascript olan array yaradın.
 
// 8.1 Arrayin neçə elementi olduğunu göstərin.
// 8.2 Arrayin ilk və son elementini göstərin.
// 8.3 Arraydə html deyə bir elementi olub-olmadığını tapın.
// 8.4 Arrayin əvvəlinə Java, sonuna C# əlavə
// edin.
// 8.5 İndi isə onları silin.
// 8.6 CSS-si silin.
// 8.7 Array elemenntlərini bir stringdə aralarında - işarəsi olacaq şəkildə birləşdirin.
// 8.8 CSS-dən sonra C++ və Go əlavə eliyin.


// 9. Funksiyanı yazın.
// console.log(deep([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]

// 10. 10 nəfərlik tələbə arrayi yazın. Jurnal sırasında kimin ən axırıncı olacağını müəyyənləşdirin.

// 11. [13,18,15,48,90] ədədlərin ortalamasını tapın. Tam ədədə yuvarlaqlaşdırın.

// 12. [13,18,15,48,90] bu arraydən hər hansı təsadüfən seçib götürün.

