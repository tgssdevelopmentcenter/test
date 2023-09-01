import { Component, OnInit } from '@angular/core';
import { FancyBoxService } from '../custom-modules/fancy-box-stable/fancy-box.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  constructor(private service: FancyBoxService) { }

  ngOnInit(): void {
  }


  setData(data) {
    this.service.setImages(data)
  }


  data = [
    "https://lipsum.app/id/64/1600x1200",
    "https://lipsum.app/id/63/1600x1200",
    "https://lipsum.app/id/62/1600x1200",
    "https://lipsum.app/id/61/1600x1200",
    "https://lipsum.app/id/60/1600x1200"]


  data2 = [
    "https://images.pexels.com/photos/12847983/pexels-photo-12847983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3459967/pexels-photo-3459967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18162754/pexels-photo-18162754/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ]

  data3 = [
    "https://images.pexels.com/photos/13340866/pexels-photo-13340866.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/6437833/pexels-photo-6437833.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/4474034/pexels-photo-4474034.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/42415/pexels-photo-42415.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/6898857/pexels-photo-6898857.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]

}
