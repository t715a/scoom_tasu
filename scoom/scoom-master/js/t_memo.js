//2020.07.21 青木太助　メモ処理部

const app = new Vue({
  el: '#UI_memo',
  data: {
    studentID: localStorage.getItem("storeId"),
    subjectID: localStorage.getItem("storename"),
    memo: [],
    newMemo: ''
  },
  mounted() {
    if (localStorage.getItem(this.studentID + this.subjectID + 'memo')) {

      try {
        this.memo = JSON.parse(localStorage.getItem(this.studentID + this.subjectID + 'memo'));
      } catch (e) {
        localStorage.removeItem(this.studentID + this.subjectID + 'memo');
      }
    }
  },
  methods: {
    //メモの追加
    addMemo() {
      if (this.newMemo.length == 0) {
        alert('1文字以上にしてください');
      }
      else if (this.newMemo.length > 256) {
        alert('256文字以内にしてください');
      } else {
        this.memo.push(this.newMemo);
        this.newMemo = '';
        this.saveMemo();
      }
    },
    //メモの削除
    removeMemo(x) {
      this.memo.splice(x, 1);
      this.saveMemo();
    },
    //メモの保存
    saveMemo() {
      const parsed = JSON.stringify(this.memo);
      localStorage.setItem(this.studentID + this.subjectID + 'memo', parsed);
    }
  }
})