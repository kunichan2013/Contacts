// 出力用ログ
var log = "Count employees-before: " + ds.Employee.length + ", Count companies-before: " + ds.Company.length;

// 主プログラム
function doImportEmpsAndComps () {
     /*   インポート用のファイルはソリューション フォルダ内の "Import" という
         サブフォルダに入っています。このファイルを一気にロードし (loadText) 、
         データを改行で区切って配列に格納します (1行 = 1配列要素).
     */
     var lines = loadText( ds.getModelFolder().path + "Import/emps_comps.txt" ).split("\n");
       /*   次に、列毎の要素を格納する配列変数を定義します。
           列データは次のように配列に格納します:
            columns[0]   会社名
            columns[1]   社員の姓
            columns[2]   社員の名
            columns[3]   給与
    	 */  
   		var columns = [];
       // line 配列の要素毎のループを作ります。 
		lines.forEach( function(oneLine) {  
      // line 配列の要素をタブで区切って、column 配列に格納します。 
	　　columns = oneLine.split("\t");    

      // Company データストアーから当該社名のエンティティを探します。
      var theComp = ds.Company.find("name = :1", columns[0]);
      if(theComp == null) { // 見つからなかった場合はエンティティを新規作成し、
           theComp = new ds.Company({
            name : columns[0] 
         });
         // 保存します。 
         theComp.save();
           }    
      // 同じことを Employee データストアーに関して行います。
       var theEmp = ds.Employee.find("lastName = :1 and firstName = :2", columns[1], columns[2]);
      if(theEmp == null) {
         theEmp = new ds.Employee( {
            lastName    : columns[1],
            firstName    : columns[2],
            salary   : columns[3],
            company   : theComp // Wakanda でエンティティを関連付ける方法です。
         }); 
      } else {
         theEmp.salary = columns[3],
         theEmp.company = theComp;
      }
        theEmp.save();
     });
 }
 // 主プログラムを実行します。
doImportEmpsAndComps ();
 
 // 結果出力用ログ
log += " / Count employees-after: " + ds.Employee.length + ", Count companies-after: " + ds.Company.length;

