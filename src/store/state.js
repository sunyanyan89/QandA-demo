const state = {
    count: 0,
    title: 'tuitee',
    show: false,
    todos: [
        { id: 1, text: 'text1', done: true },
        { id: 2, text: 'text2', done: false },
        { id: 3, text: 'text3', done: true },
        { id: 4, text: 'text4', done: false },
        { id: 5, text: 'text5', done: true },
    ],
    currId: 1, // 第几题
    allTime: 0, // 总共用时
    timer: '', // 定时器
    answerId: [], // 答案id
    scoreTipsArr: ['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明！'],    
    topics: [{
        "topic_id": 1,
        "topic_name": "题目一",
        "answer_id": 1,
        "topic_answer": ["答案aaaa", "正确答案", "答案cccc","答案dddd"]
      }, {
        "topic_id": 2,
        "topic_name": "题目二",
        "answer_id": 2,        
        "topic_answer": ["答案A", "答案B", "正确答案", "答案D"]
      }, {
        "topic_id": 3,
        "topic_name": "题目三",
        "answer_id": 3,        
        "topic_answer": ["测试A", "BBBBBB", "CCCCCC", "正确答案"]
      }, {
        "topic_id": 4,
        "topic_name": "题目四",
        "answer_id": 0,
        "topic_answer": ["正确答案", "A是错的", "D是对的", "C说的不对"]
      }, {
        "topic_id": 5,
        "topic_name": "题目五",
        "answer_id": 1,
        "topic_answer": ["错误答案", "正确答案", "错误答案", "错误答案"]
      }],
}

export default state