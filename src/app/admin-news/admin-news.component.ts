import {Component, OnInit} from '@angular/core';
import {flyIn} from '../animate/fly-in';
import {fadeIn} from '../animate/fade-in';
@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css'],
  animations: [
    flyIn,
    fadeIn
  ]
})
export class AdminNewsComponent implements OnInit {
  files = [1];
  time = new Date();
  content = `Swift 是一种新的编程语言,用于编写 iOS,macOS,watchOS 和 tvOS 的应用程序。Swift 结合了 C 和 Object ive-C 的优点并且不受 C 兼容性的限制。Swift 采用安全的编程模式并添加了很多新特性,这将使编程更简 单,更灵活,也更有趣。Swift 是基于成熟而且倍受喜爱的 Cocoa 和 Cocoa Touch 框架,它的降临将重新定义 软件开发。
  Swift 的开发从很久之前就开始了。为了给 Swift 打好基础,苹果公司改进了编译器,调试器和框架结构。我们 使用自动引用计数(Automatic Reference Counting, ARC)来简化内存管理。我们在 Foundation 和 Cocoa 的 基础上构建框架栈使其完全现代化和标准化。 Objective-C 本身支持块、集合语法和模块,所以框架可以轻松支 持现代编程语言技术。正是得益于这些基础工作,我们现在才能发布这样一个用于未来苹果软件开发的新语言。
`;

  constructor() {
  }

  ngOnInit() {
  }

}
