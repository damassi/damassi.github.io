import React, { Component } from 'react'
import { get } from 'lodash'

export default class Projects extends Component {
  render() {
    const { posts } = getProjects()

    return (
      <div id='projects' className='projects'>
        { posts.map((project, index) => {
          const projectUrl = get(project, 'custom_fields.site_url[0]')
          const aboutProject = get(project, 'custom_fields.about_project[0]')

          return (
            <div className='project' key={index}>
              <div className='title'>
                <h2>
                  {project.title}
                </h2>
                { projectUrl &&
                  <div className='link-site'>
                    <a href={projectUrl} target='_blank'>
                      Visit
                    </a>
                  </div> }
              </div>

              <div className='about-project'>
                <ul className='tags'>
                  { project.tags.map((tag, index) =>
                    <li key={index}>
                      {tag.title}
                    </li>
                  )}
                </ul>

                { aboutProject &&
                  <div className='description'>
                    {aboutProject}
                  </div> }
              </div>

            <div
              className='images'
              dangerouslySetInnerHTML={{__html: project.content }}
            />

            </div>

          )
        })}
      </div>
    )
  }
}

function getProjects() {
  return {
    'status': 'ok',
    'count': 27,
    'count_total': 27,
    'pages': 1,
    'posts': [
      {
        'id': 672,
        'type': 'post',
        'slug': 'kindling',
        'url': 'http://www.kindlingapp.com',
        'status': 'publish',
        'title': 'Kindling',
        'title_plain': 'Kindling',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2015/kindling/1.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2015/kindling/2.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2015/kindling/3.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2015/kindling/4.png\' width=\'700\' height=\'auto\' /></p>\n',
        'excerpt': '',
        'date': '2014-06-08 22:18:03',
        'modified': '2014-06-08 22:25:16',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 66,
            'slug': 'backbone',
            'title': 'Backbone',
            'description': '',
            'post_count': 1
          },
          {
            'id': 66,
            'slug': 'react',
            'title': 'React',
            'description': '',
            'post_count': 1
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 56,
            'slug': 'responsive',
            'title': 'Responsive',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.kindlingapp.com'
          ],
          'about_project': [
            'Kindling is a SAAS-based software application that helps the best ideas in an organization rise to the top.  It is easy to use and highly customizable, with an interface built on top of React.js, Backbone and Sass.  As Sr. Developer / UI Engineer, my responsibilities have included refactoring the entire application off of an old, less-than-modern Require.js model and onto Node.js and Webpack, shifting the UI architecture away from Backbone.js and onto React, as well as re-architecting the structure around SOA principles.'
          ]
        }
      },
      {
        'id': 672,
        'type': 'post',
        'slug': 'amazon-local-register',
        'url': 'https://itunes.apple.com/us/app/amazon-local-register-amazons/id825947720?mt=8',
        'status': 'publish',
        'title': 'Amazon Local Register Mobile App',
        'title_plain': 'Amazon Local Register Mobile App',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2014/amz/1.jpg\' width=\'700\' height=\'359\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2014/amz/2.jpg\' width=\'700\' height=\'357\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2014/amz/3.jpg\' width=\'700\' height=\'333\' /></p>\n',
        'excerpt': '',
        'date': '2014-06-08 22:18:03',
        'modified': '2014-06-08 22:25:16',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 66,
            'slug': 'backbone',
            'title': 'Backbone',
            'description': '',
            'post_count': 1
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 56,
            'slug': 'responsive',
            'title': 'Responsive',
            'description': '',
            'post_count': 1
          },
          {
            'id': 68,
            'slug': 'spa',
            'title': 'SPA',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'https://itunes.apple.com/us/app/amazon-local-register-amazons/id825947720?mt=8'
          ],
          'about_project': [
            "Amazon Local Register is Amazon's entry into the Point of Sale marketplace.  As one of three core JavaScript developers responsible for architecting and building out the customer-facing portion of the app and store, I touched nearly every aspect of the code, from POC to final delivery."
          ]
        }
      },
      {
        'id': 672,
        'type': 'post',
        'slug': 'coke-mpc-ahhh-beat-maker',
        'url': 'http://iiiiiiiiii.co/commercial/coke-mpc-ahhh-beat-maker/',
        'status': 'publish',
        'title': 'Coke | MPC Ahhh Beat Maker App',
        'title_plain': 'Coke | MPC Ahhh Beat Maker App',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2014/06/1.jpg\' width=\'700\' height=\'359\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2014/06/2.jpg\' width=\'700\' height=\'357\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2014/06/41.png\' width=\'700\' height=\'333\' /></p>\n',
        'excerpt': '',
        'date': '2014-06-08 22:18:03',
        'modified': '2014-06-08 22:25:16',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 66,
            'slug': 'backbone',
            'title': 'Backbone',
            'description': '',
            'post_count': 1
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 67,
            'slug': 'parse',
            'title': 'Parse',
            'description': '',
            'post_count': 1
          },
          {
            'id': 56,
            'slug': 'responsive',
            'title': 'Responsive',
            'description': '',
            'post_count': 1
          },
          {
            'id': 68,
            'slug': 'spa',
            'title': 'SPA',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 673,
            'url': 'assets/images/2014/06/1.jpg',
            'slug': '1',
            'title': '1',
            'description': '',
            'caption': '',
            'parent': 672,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2014/06/1.jpg',
                'width': 700,
                'height': 359
              },
              'thumbnail': {
                'url': 'assets/images/2014/06/1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2014/06/1-300x153.jpg',
                'width': 300,
                'height': 153
              }
            }
          },
          {
            'id': 674,
            'url': 'assets/images/2014/06/2.jpg',
            'slug': '2',
            'title': '2',
            'description': '',
            'caption': '',
            'parent': 672,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2014/06/2.jpg',
                'width': 700,
                'height': 357
              },
              'thumbnail': {
                'url': 'assets/images/2014/06/2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2014/06/2-300x153.jpg',
                'width': 300,
                'height': 153
              }
            }
          },
          {
            'id': 675,
            'url': 'assets/images/2014/06/4.png',
            'slug': '4',
            'title': '4',
            'description': '',
            'caption': '',
            'parent': 672,
            'mime_type': 'image/png',
            'images': {
              'full': {
                'url': 'assets/images/2014/06/4.png',
                'width': 945,
                'height': 450
              },
              'thumbnail': {
                'url': 'assets/images/2014/06/4-150x150.png',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2014/06/4-300x142.png',
                'width': 300,
                'height': 142
              }
            }
          },
          {
            'id': 676,
            'url': 'assets/images/2014/06/41.png',
            'slug': '4-2',
            'title': '4',
            'description': '',
            'caption': '',
            'parent': 672,
            'mime_type': 'image/png',
            'images': {
              'full': {
                'url': 'assets/images/2014/06/41.png',
                'width': 700,
                'height': 333
              },
              'thumbnail': {
                'url': 'assets/images/2014/06/41-150x150.png',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2014/06/41-300x142.png',
                'width': 300,
                'height': 142
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.com/'
          ],
          'about_project': [
            'MPC Ahh is a responsive single-page app that allows the user to create and share beats, as well as play along via live pads.  Built on top of Backbone and Parse, with nearly full test coverage via Mocha.  '
          ]
        }
      },
      {
        'id': 451,
        'type': 'post',
        'slug': 'toyota-eshowroom',
        'url': 'http://iiiiiiiiii.co/commercial/toyota-eshowroom/',
        'status': 'publish',
        'title': 'Toyota | EShowroom',
        'title_plain': 'Toyota | EShowroom',
        'content': '<p><a href=\'assets/images/2013/07/toy-1.jpg\'><img class=\'452\' alt=\'toy-1\' src=\'/assets/images/2013/07/toy-1.jpg\' width=\'700\' height=\'611\' /><br />\n</a> <img class=\'453\' alt=\'toy-2\' src=\'/assets/images/2013/07/toy-2.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'454\' alt=\'toy-3\' src=\'/assets/images/2013/07/toy-3.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'455\' alt=\'toy-home\' src=\'/assets/images/2013/07/toy-home.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'456\' alt=\'toy-profile\' src=\'/assets/images/2013/07/toy-profile.jpg\' width=\'700\' height=\'611\' /><br />\n<a href=\'assets/images/2013/07/toy-video.jpg\'><img class=\'457\' alt=\'toy-video\' src=\'/assets/images/2013/07/toy-video.jpg\' width=\'700\' height=\'611\' /><br />\n</a></p>\n',
        'excerpt': '',
        'date': '2013-07-05 04:18:31',
        'modified': '2013-08-03 01:14:38',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 13,
            'slug': 'backbone-js',
            'title': 'Backbone.js',
            'description': '',
            'post_count': 6
          },
          {
            'id': 44,
            'slug': 'less',
            'title': 'LESS',
            'description': '',
            'post_count': 1
          },
          {
            'id': 43,
            'slug': 'mustache-templates',
            'title': 'Mustache Templates',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 452,
            'url': 'assets/images/2013/07/toy-1.jpg',
            'slug': 'toy-1',
            'title': 'toy-1',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-1.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-1-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          },
          {
            'id': 453,
            'url': 'assets/images/2013/07/toy-2.jpg',
            'slug': 'toy-2',
            'title': 'toy-2',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-2.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-2-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          },
          {
            'id': 454,
            'url': 'assets/images/2013/07/toy-3.jpg',
            'slug': 'toy-3',
            'title': 'toy-3',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-3.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-3-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          },
          {
            'id': 455,
            'url': 'assets/images/2013/07/toy-home.jpg',
            'slug': 'toy-home',
            'title': 'toy-home',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-home.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-home-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-home-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          },
          {
            'id': 456,
            'url': 'assets/images/2013/07/toy-profile.jpg',
            'slug': 'toy-profile',
            'title': 'toy-profile',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-profile.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-profile-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-profile-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          },
          {
            'id': 457,
            'url': 'assets/images/2013/07/toy-video.jpg',
            'slug': 'toy-video',
            'title': 'toy-video',
            'description': '',
            'caption': '',
            'parent': 451,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/toy-video.jpg',
                'width': 700,
                'height': 611
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/toy-video-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/toy-video-300x261.jpg',
                'width': 300,
                'height': 261
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'https://eshowroom.toyota.com/eShowroom/'
          ],
          'about_project': [
            "Toyota EShowroom was Toyota's attempt to modernize how thousands of dealerships across the world communicate with one another, and with their customers.  Not only was it a complete digital catalog of their cars and trucks, but also an internal social network which allowed managers, customer service representatives and other employees to communicate, share information and stay up to date with the latest offerings from Toyota.  \r\n\r\n<br/><br/>\r\n\r\nAs one of many JavaScript developers on the project, I was tasked with building out the main product pages and search, as well as refactoring, towards the end, many (many) thousands of lines of code for maintainability and stability reasons.  \r\n\r\n<br/><br/>\r\n\r\nThe project is currently only viewable internally by Toyota employees, but the screenshots to your left should give you a glimpse at the complexity of the task.  \r\n\r\n<br/><br/>\r\n\r\nThis was, by far, POP Agency's largest digital project, many years in the making."
          ]
        }
      },
      {
        'id': 652,
        'type': 'post',
        'slug': 'nike-fuelband-se-global-kiosk',
        'url': 'http://iiiiiiiiii.co/commercial/nike-fuelband-se-global-kiosk/',
        'status': 'publish',
        'title': 'Nike+ | FuelBand SE Global Kiosk',
        'title_plain': 'Nike+ | FuelBand SE Global Kiosk',
        'content': '<p><img class=\'658\' alt=\'image\' src=\'/assets/images/2013/11/image.jpg\' width=\'960\' height=\'710\' /></p>\n<p><img class=\'653\' alt=\'Nike_b_1\' src=\'/assets/images/2013/11/Nike_b_1.png\' width=\'700\' height=\'394\' /></p>\n<p>&nbsp;</p>\n',
        'excerpt': '<p>&nbsp;</p>\n',
        'date': '2013-11-13 07:59:12',
        'modified': '2013-11-13 19:19:12',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 13,
            'slug': 'backbone-js',
            'title': 'Backbone.js',
            'description': '',
            'post_count': 6
          },
          {
            'id': 50,
            'slug': 'handlebars',
            'title': 'Handlebars',
            'description': '',
            'post_count': 4
          },
          {
            'id': 55,
            'slug': 'sass',
            'title': 'SASS',
            'description': '',
            'post_count': 4
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 653,
            'url': 'assets/images/2013/11/Nike_b_1.png',
            'slug': 'nike_b_1',
            'title': 'Nike_b_1',
            'description': '',
            'caption': '',
            'parent': 652,
            'mime_type': 'image/png',
            'images': {
              'full': {
                'url': 'assets/images/2013/11/Nike_b_1.png',
                'width': 700,
                'height': 394
              },
              'thumbnail': {
                'url': 'assets/images/2013/11/Nike_b_1-150x150.png',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/11/Nike_b_1-300x168.png',
                'width': 300,
                'height': 168
              }
            }
          },
          {
            'id': 654,
            'url': 'assets/images/2013/11/image015.jpeg',
            'slug': 'image015',
            'title': 'image015',
            'description': '',
            'caption': '',
            'parent': 652,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/11/image015.jpeg',
                'width': 700,
                'height': 744
              },
              'thumbnail': {
                'url': 'assets/images/2013/11/image015-150x150.jpeg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/11/image015-282x300.jpeg',
                'width': 282,
                'height': 300
              }
            }
          },
          {
            'id': 658,
            'url': 'assets/images/2013/11/image.jpg',
            'slug': 'image',
            'title': 'image',
            'description': '',
            'caption': '',
            'parent': 652,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/11/image.jpg',
                'width': 960,
                'height': 710
              },
              'thumbnail': {
                'url': 'assets/images/2013/11/image-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/11/image-300x221.jpg',
                'width': 300,
                'height': 221
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            'With the new release of the Nike+ FuelBand SE, Nike wanted to revamp their current in-store kiosk presence to reflect the latest style.  Released in over 200 NikeTown stores around the world, the kiosk features an interactive touch-screen interface, video, analytics and more.  I was the lead JavaScript developer on the project, responsible for coding and animation.    '
          ]
        }
      },
      {
        'id': 488,
        'type': 'post',
        'slug': 'nike-factory-store-kiosk',
        'url': 'http://iiiiiiiiii.co/commercial/nike-factory-store-kiosk/',
        'status': 'publish',
        'title': 'Nike | Factory Store Kiosk',
        'title_plain': 'Nike | Factory Store Kiosk',
        'content': '<p><img class=\'489\' alt=\'nike-1\' src=\'/assets/images/2013/07/nike-1.jpg\' width=\'700\' height=\'1244\' /> <img class=\'490\' alt=\'nike-2\' src=\'/assets/images/2013/07/nike-2.jpg\' width=\'700\' height=\'1244\' /> <img class=\'491\' alt=\'nike-3\' src=\'/assets/images/2013/07/nike-3.jpg\' width=\'700\' height=\'1244\' /> <img class=\'492\' alt=\'nike-4\' src=\'/assets/images/2013/07/nike-4.jpg\' width=\'700\' height=\'1244\' /></p>\n<p><img class=\'648\' alt=\'nike-instore\' src=\'/assets/images/2013/07/nike-instore.jpg\' width=\'700\' height=\'941\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 05:34:00',
        'modified': '2013-08-10 23:48:42',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 10,
            'slug': 'animation',
            'title': 'Animation',
            'description': '',
            'post_count': 3
          },
          {
            'id': 13,
            'slug': 'backbone-js',
            'title': 'Backbone.js',
            'description': '',
            'post_count': 6
          },
          {
            'id': 57,
            'slug': 'chrome-extension',
            'title': 'Chrome Extension',
            'description': '',
            'post_count': 1
          },
          {
            'id': 50,
            'slug': 'handlebars',
            'title': 'Handlebars',
            'description': '',
            'post_count': 4
          },
          {
            'id': 55,
            'slug': 'sass',
            'title': 'SASS',
            'description': '',
            'post_count': 4
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 648,
            'url': 'assets/images/2013/07/nike-instore.jpg',
            'slug': 'nike-instore',
            'title': 'nike-instore',
            'description': '',
            'caption': '',
            'parent': 488,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nike-instore.jpg',
                'width': 700,
                'height': 941
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nike-instore-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nike-instore-223x300.jpg',
                'width': 223,
                'height': 300
              }
            }
          },
          {
            'id': 489,
            'url': 'assets/images/2013/07/nike-1.jpg',
            'slug': 'nike-1',
            'title': 'nike-1',
            'description': '',
            'caption': '',
            'parent': 488,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nike-1.jpg',
                'width': 700,
                'height': 1244
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nike-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nike-1-168x300.jpg',
                'width': 168,
                'height': 300
              },
              'large': {
                'url': 'assets/images/2013/07/nike-1-576x1024.jpg',
                'width': 576,
                'height': 1024
              }
            }
          },
          {
            'id': 490,
            'url': 'assets/images/2013/07/nike-2.jpg',
            'slug': 'nike-2',
            'title': 'nike-2',
            'description': '',
            'caption': '',
            'parent': 488,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nike-2.jpg',
                'width': 700,
                'height': 1244
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nike-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nike-2-168x300.jpg',
                'width': 168,
                'height': 300
              },
              'large': {
                'url': 'assets/images/2013/07/nike-2-576x1024.jpg',
                'width': 576,
                'height': 1024
              }
            }
          },
          {
            'id': 491,
            'url': 'assets/images/2013/07/nike-3.jpg',
            'slug': 'nike-3',
            'title': 'nike-3',
            'description': '',
            'caption': '',
            'parent': 488,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nike-3.jpg',
                'width': 700,
                'height': 1244
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nike-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nike-3-168x300.jpg',
                'width': 168,
                'height': 300
              },
              'large': {
                'url': 'assets/images/2013/07/nike-3-576x1024.jpg',
                'width': 576,
                'height': 1024
              }
            }
          },
          {
            'id': 492,
            'url': 'assets/images/2013/07/nike-4.jpg',
            'slug': 'nike-4',
            'title': 'nike-4',
            'description': '',
            'caption': '',
            'parent': 488,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nike-4.jpg',
                'width': 700,
                'height': 1244
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nike-4-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nike-4-168x300.jpg',
                'width': 168,
                'height': 300
              },
              'large': {
                'url': 'assets/images/2013/07/nike-4-576x1024.jpg',
                'width': 576,
                'height': 1024
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            'Nike came to POP looking to spice up their current in-store kiosk, and I was responsible for handling development of all facets of the experience.  This included JavaScript, SASS and animation, as well as a totally custom Chrome extension for managing various environmental use cases related to security, interaction and the on-screen keyboard.'
          ]
        }
      },
      {
        'id': 13,
        'type': 'post',
        'slug': 'showtime-anytime',
        'url': 'http://iiiiiiiiii.co/commercial/showtime-anytime/',
        'status': 'publish',
        'title': 'SHOWTIME ANYTIME',
        'title_plain': 'SHOWTIME ANYTIME',
        'content': '<p><img class=\'121\' title=\'show_1\' alt=\'\' src=\'/assets/images/2012/03/show_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'122\' title=\'sho_2\' alt=\'\' src=\'/assets/images/2012/03/sho_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'123\' title=\'show_3\' alt=\'\' src=\'/assets/images/2012/03/show_3.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'124\' title=\'sho_4\' alt=\'\' src=\'/assets/images/2012/03/sho_4.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Co-developer</p>\n',
        'date': '2012-03-16 03:01:05',
        'modified': '2013-08-03 01:14:55',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 12,
            'slug': 'as3',
            'title': 'AS3',
            'description': '',
            'post_count': 6
          },
          {
            'id': 15,
            'slug': 'brightcove-video-api',
            'title': 'BrightCove Video API',
            'description': '',
            'post_count': 1
          },
          {
            'id': 41,
            'slug': 'widevine-content-encryption',
            'title': 'WideVine Content Encryption',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.showtimeanytime.com/'
          ],
          'about_project': [
            'Showtime Anytime is a one-stop location for subscribers to access all of Showtime’s programming.  Brought on as one of two developers, I was involved in every stage of the project; from brainstorming, wire-framing and art direction to programming, I was working with a core team involved in bringing a much-desired product—and one of Showtime’s biggest online properties—to life. '
          ]
        }
      },
      {
        'id': 420,
        'type': 'post',
        'slug': 'brooks-shoes-transcend-above',
        'url': 'http://iiiiiiiiii.co/commercial/brooks-shoes-transcend-above/',
        'status': 'publish',
        'title': 'Brooks Shoes | Rise Above The Run',
        'title_plain': 'Brooks Shoes | Rise Above The Run',
        'content': '<p><img class=\'421\' alt=\'brooks-1\' src=\'/assets/images/2013/07/brooks-1.jpg\' width=\'700\' height=\'631\' /> <img class=\'422\' alt=\'brooks-2\' src=\'/assets/images/2013/07/brooks-2.jpg\' width=\'700\' height=\'631\' /> <img class=\'423\' alt=\'brooks-3\' src=\'/assets/images/2013/07/brooks-3.jpg\' width=\'700\' height=\'437\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 03:59:04',
        'modified': '2013-09-04 08:05:18',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 13,
            'slug': 'backbone-js',
            'title': 'Backbone.js',
            'description': '',
            'post_count': 6
          },
          {
            'id': 50,
            'slug': 'handlebars',
            'title': 'Handlebars',
            'description': '',
            'post_count': 4
          },
          {
            'id': 51,
            'slug': 'tweenmax',
            'title': 'TweenMax',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 421,
            'url': 'assets/images/2013/07/brooks-1.jpg',
            'slug': 'brooks-1',
            'title': 'brooks-1',
            'description': '',
            'caption': '',
            'parent': 420,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/brooks-1.jpg',
                'width': 700,
                'height': 631
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/brooks-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/brooks-1-300x270.jpg',
                'width': 300,
                'height': 270
              }
            }
          },
          {
            'id': 422,
            'url': 'assets/images/2013/07/brooks-2.jpg',
            'slug': 'brooks-2',
            'title': 'brooks-2',
            'description': '',
            'caption': '',
            'parent': 420,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/brooks-2.jpg',
                'width': 700,
                'height': 631
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/brooks-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/brooks-2-300x270.jpg',
                'width': 300,
                'height': 270
              }
            }
          },
          {
            'id': 423,
            'url': 'assets/images/2013/07/brooks-3.jpg',
            'slug': 'brooks-3',
            'title': 'brooks-3',
            'description': '',
            'caption': '',
            'parent': 420,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/brooks-3.jpg',
                'width': 700,
                'height': 437
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/brooks-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/brooks-3-300x187.jpg',
                'width': 300,
                'height': 187
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.brooksrunning.com/transcend'
          ],
          'about_project': [
            "Brooks Rise Above The Run, a responsive, highly-performant HTML5, JavaScript and CSS3 parallax experience for the release of their new 2014 shoe, was completed over the course of two weeks, start to finish, from whiteboard sketches to minified code.   It even runs great on the iPad.     \r\n\r\n<br/><br/>\r\n\r\nTo keep the site performant and animation consistent across all browsers, I used GreenSock's epic TweenMax and TimelineMax libraries for handling CSS3 transforms.  Backbone.js was used for routing and managing state, and SASS was used for handling programmatic @mediaquery generation."
          ]
        }
      },
      {
        'id': 664,
        'type': 'post',
        'slug': 'world-war-elf',
        'url': 'http://iiiiiiiiii.co/commercial/world-war-elf/',
        'status': 'publish',
        'title': 'World War E(lf)',
        'title_plain': 'World War E(lf)',
        'content': '<p><img class=\'668\' alt=\'elf-1\' src=\'/assets/images/2013/12/elf-1.jpg\' width=\'700\' height=\'496\' /></p>\n<p><img class=\'667\' alt=\'elf-2\' src=\'/assets/images/2013/12/elf-2.jpg\' width=\'700\' height=\'496\' /></p>\n<p><img class=\'666\' alt=\'elf-3\' src=\'/assets/images/2013/12/elf-3.jpg\' width=\'700\' height=\'496\' /></p>\n<p><img class=\'665\' alt=\'elf-4\' src=\'/assets/images/2013/12/elf-4.jpg\' width=\'700\' height=\'496\' /></p>\n',
        'excerpt': '',
        'date': '2013-12-18 19:40:18',
        'modified': '2013-12-18 19:40:18',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 63,
            'slug': 'canvas',
            'title': 'Canvas',
            'description': '',
            'post_count': 1
          },
          {
            'id': 65,
            'slug': 'game-development',
            'title': 'Game development',
            'description': '',
            'post_count': 1
          },
          {
            'id': 61,
            'slug': 'html5',
            'title': 'HTML5',
            'description': '',
            'post_count': 2
          },
          {
            'id': 64,
            'slug': 'node-js',
            'title': 'Node.js',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 665,
            'url': 'assets/images/2013/12/elf-4.jpg',
            'slug': 'elf-4',
            'title': 'elf-4',
            'description': '',
            'caption': '',
            'parent': 664,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/12/elf-4.jpg',
                'width': 700,
                'height': 496
              },
              'thumbnail': {
                'url': 'assets/images/2013/12/elf-4-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/12/elf-4-300x212.jpg',
                'width': 300,
                'height': 212
              }
            }
          },
          {
            'id': 666,
            'url': 'assets/images/2013/12/elf-3.jpg',
            'slug': 'elf-3',
            'title': 'elf-3',
            'description': '',
            'caption': '',
            'parent': 664,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/12/elf-3.jpg',
                'width': 700,
                'height': 496
              },
              'thumbnail': {
                'url': 'assets/images/2013/12/elf-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/12/elf-3-300x212.jpg',
                'width': 300,
                'height': 212
              }
            }
          },
          {
            'id': 667,
            'url': 'assets/images/2013/12/elf-2.jpg',
            'slug': 'elf-2',
            'title': 'elf-2',
            'description': '',
            'caption': '',
            'parent': 664,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/12/elf-2.jpg',
                'width': 700,
                'height': 496
              },
              'thumbnail': {
                'url': 'assets/images/2013/12/elf-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/12/elf-2-300x212.jpg',
                'width': 300,
                'height': 212
              }
            }
          },
          {
            'id': 668,
            'url': 'assets/images/2013/12/elf-1.jpg',
            'slug': 'elf-1',
            'title': 'elf-1',
            'description': '',
            'caption': '',
            'parent': 664,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/12/elf-1.jpg',
                'width': 700,
                'height': 496
              },
              'thumbnail': {
                'url': 'assets/images/2013/12/elf-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/12/elf-1-300x212.jpg',
                'width': 300,
                'height': 212
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'https://github.com/damassi/world-war-elf'
          ],
          'about_project': [
            "World War E(lf) is a classic take on the carnival shooting gallery theme, but with a twist:  you can control the target with your smart phone, and instead of pigeons you're shooting zombified, killer elves.  Scary!  \r\n\r\n<br><br>\r\n\r\nI was responsible for all aspects of development, from the Node-based websocket backend running on Sails.js, to animation, to the Canvas-based front-end using a tiny framework that I wrote which merges the best of Backbone.js with the incredible functionality and performance of Easel.js.  It is no longer online, but you can view the source-code here:  https://github.com/damassi/world-war-elf."
          ]
        }
      },

      {
        'id': 27,
        'type': 'post',
        'slug': 'onwax-mobile',
        'url': 'http://iiiiiiiiii.co/commercial/onwax-mobile/',
        'status': 'publish',
        'title': 'WAX Mobile iOS App',
        'title_plain': 'WAX Mobile iOS App',
        'content': '<p><img class=\'28\' title=\'wax_1\' alt=\'\' src=\'/assets/images/2012/05/wax_1.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer  (Development in progress)</p>\n',
        'date': '2012-05-29 23:38:31',
        'modified': '2013-08-03 01:25:35',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 29,
            'slug': 'ios-native',
            'title': 'iOS (Native)',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            "WAX Mobile was my first foray into larger-scale, native iOS development.  Initially it was decided that the project was going to be built using HTML5, but midway through development we switched gears and decided to go native... for all the reasons that you read about online.  Right around this time was when the RubyMotion toolchain was released and after evaluating it a bit we decided that it would be a good fit for WAX.  After just a few weeks we had a full-featured prototype up and a universal iPad version on the way.  \r\n\r\n<br/><br/>\r\n\r\nJust as WAX Mobile was about to be released, OnWax Media's parent company decided to abandon ship on the network and, therefore, the app.  It sadly never got to see the light of day, aka the AppStore."
          ]
        }
      },
  {
        'id': 35,
        'type': 'post',
        'slug': 'omnicom',
        'url': 'http://iiiiiiiiii.co/commercial/omnicom/',
        'status': 'publish',
        'title': 'Omnicom Media Pulse',
        'title_plain': 'Omnicom Media Pulse',
        'content': '<div id=\'portfolio\'></div>\n<p><img class=\'36\' title=\'1_0012_omnicom_1\' alt=\'\' src=\'/assets/images/2012/05/1_0012_omnicom_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'37\' title=\'1_0013_omnicom_2\' alt=\'\' src=\'/assets/images/2012/05/1_0013_omnicom_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'38\' title=\'1_0014_omnicom_3\' alt=\'\' src=\'/assets/images/2012/05/1_0014_omnicom_3.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'39\' title=\'1_0015_omnicom_4\' alt=\'\' src=\'/assets/images/2012/05/1_0015_omnicom_4.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:41:31',
        'modified': '2013-08-03 01:15:18',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 13,
            'slug': 'backbone-js',
            'title': 'Backbone.js',
            'description': '',
            'post_count': 6
          },
          {
            'id': 16,
            'slug': 'coffeescript',
            'title': 'CoffeeScript',
            'description': '',
            'post_count': 1
          },
          {
            'id': 23,
            'slug': 'eco-templates',
            'title': 'Eco Templates',
            'description': '',
            'post_count': 1
          },
          {
            'id': 32,
            'slug': 'jquery',
            'title': 'jQuery',
            'description': '',
            'post_count': 1
          },
          {
            'id': 33,
            'slug': 'omma-award-finalist',
            'title': 'Omma Award Finalist',
            'description': '',
            'post_count': 1
          },
          {
            'id': 36,
            'slug': 'php',
            'title': 'PHP',
            'description': '',
            'post_count': 4
          },
          {
            'id': 37,
            'slug': 'restful-wordpress-api',
            'title': 'RESTful Wordpress API',
            'description': '',
            'post_count': 1
          },
          {
            'id': 40,
            'slug': 'underscore-js',
            'title': 'Underscore.js',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.omnicommediagroupmediapulse.com'
          ],
          'about_project': [
            "Omnicom MediaPulse is Omnicom Group's online monthly \'trends\' magazine.  I developed it using CoffeeScript and Backbone.js, and built the backend architecture around WordPress and the very lean (and impressive) WordPress JSON API.\r\n\r\n<br/><br/>\r\n\r\nThis site was a finalist in the 2012 MediaPost Omma Awards."
          ]
        }
      },
      {
        'id': 79,
        'type': 'post',
        'slug': 'lenscrafters-design-pitch',
        'url': 'http://iiiiiiiiii.co/commercial/lenscrafters-design-pitch/',
        'status': 'publish',
        'title': 'LensCrafters | Design Pitch',
        'title_plain': 'LensCrafters | Design Pitch',
        'content': '<p><img class=\'80\' title=\'lenscrafters_1\' alt=\'\' src=\'/assets/images/2012/05/lenscrafters_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'81\' title=\'lenscrafters_2\' alt=\'\' src=\'/assets/images/2012/05/lenscrafters_2.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Designer</p>\n',
        'date': '2012-05-29 23:55:04',
        'modified': '2013-08-03 01:15:50',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 22,
            'slug': 'design',
            'title': 'Design',
            'description': '',
            'post_count': 2
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            'Before I moved into a more developer-centric role I was once (strangely, it seems now) primarily a designer.  At TribalDDB Chicago, I was brought in to help with a re-branding pitch for LensCrafters Eyewear as they were making their transition into high fashion name-brand offerings.  \r\n\r\n<br/><br/>\r\n\r\nAnother design ended up being chosen, but I still like to keep this one around as a sort of reminiscent nod to the past.  '
          ]
        }
      },
      {
        'id': 414,
        'type': 'post',
        'slug': 'austin-city-limits-audio-player',
        'url': 'http://iiiiiiiiii.co/commercial/austin-city-limits-audio-player/',
        'status': 'publish',
        'title': 'ACL Festival | SoundCloud Audio Player',
        'title_plain': 'ACL Festival | SoundCloud Audio Player',
        'content': '<p><img class=\'415\' alt=\'acl-1\' src=\'/assets/images/2013/07/acl-1.jpg\' width=\'700\' height=\'493\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 03:56:59',
        'modified': '2013-08-03 01:25:06',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 62,
            'slug': 'browserify',
            'title': 'Browserify',
            'description': '',
            'post_count': 1
          },
          {
            'id': 58,
            'slug': 'grunt',
            'title': 'Grunt',
            'description': '',
            'post_count': 2
          },
          {
            'id': 50,
            'slug': 'handlebars',
            'title': 'Handlebars',
            'description': '',
            'post_count': 4
          },
          {
            'id': 61,
            'slug': 'html5',
            'title': 'HTML5',
            'description': '',
            'post_count': 2
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 55,
            'slug': 'sass',
            'title': 'SASS',
            'description': '',
            'post_count': 4
          },
          {
            'id': 60,
            'slug': 'soundcloud-api',
            'title': 'SoundCloud API',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 415,
            'url': 'assets/images/2013/07/acl-1.jpg',
            'slug': 'acl-1',
            'title': 'acl-1',
            'description': '',
            'caption': '',
            'parent': 414,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/acl-1.jpg',
                'width': 700,
                'height': 493
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/acl-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/acl-1-300x211.jpg',
                'width': 300,
                'height': 211
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.aclfestival.com'
          ],
          'about_project': [
            'I was responsible for developing an HTML5 audio player that seamlessly hooked up to SoundCloud, via the SoundCloud API.   '
          ]
        }
      },


      {
        'id': 437,
        'type': 'post',
        'slug': 'nintendo-animal-crossing-new-leaf',
        'url': 'http://iiiiiiiiii.co/commercial/nintendo-animal-crossing-new-leaf/',
        'status': 'publish',
        'title': 'Nintendo | Animal Crossing New Leaf',
        'title_plain': 'Nintendo | Animal Crossing New Leaf',
        'content': '<p><img class=\'438\' alt=\'nin-1\' src=\'/assets/images/2013/07/nin-1.jpg\' width=\'700\' height=\'416\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 04:14:14',
        'modified': '2013-08-03 01:18:45',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 58,
            'slug': 'grunt',
            'title': 'Grunt',
            'description': '',
            'post_count': 2
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 438,
            'url': 'assets/images/2013/07/nin-1.jpg',
            'slug': 'nin-1',
            'title': 'nin-1',
            'description': '',
            'caption': '',
            'parent': 437,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/nin-1.jpg',
                'width': 700,
                'height': 416
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/nin-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/nin-1-300x178.jpg',
                'width': 300,
                'height': 178
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.animal-crossing.com/newleaf/'
          ],
          'about_project': [
            'Animal Crossing is a hit children’s franchise from Nintendo, and New Leaf is their latest release.  \r\n\r\n<br/><br/>\r\n\r\nIn addition to handling all of the JavaScript work, I introduced Node and Grunt into what was, historically, a highly static and old-school development workflow, the skeleton of which is now being used on other Nintendo projects going forward.  \r\n\r\n<br/><br/> \r\n\r\n(However, as a side note, there were many constraints involved in this approach: firstly, they were opposed to css preprocessing of any kind; and, secondly, due to need to perform hot-fix style edits after code-handoff, script minification was opposed.)'
          ]
        }
      },
      {
        'id': 445,
        'type': 'post',
        'slug': 'target-redcard-sign-up',
        'url': 'http://iiiiiiiiii.co/commercial/target-redcard-sign-up/',
        'status': 'publish',
        'title': 'Target | RedCard Sign-Up',
        'title_plain': 'Target | RedCard Sign-Up',
        'content': '<p><img class=\'446\' alt=\'debit-1\' src=\'/assets/images/2013/07/debit-1.jpg\' width=\'700\' height=\'477\' /> <img class=\'447\' alt=\'debit-2\' src=\'/assets/images/2013/07/debit-2.jpg\' width=\'700\' height=\'477\' /> <img class=\'448\' alt=\'debit-3\' src=\'/assets/images/2013/07/debit-3.jpg\' width=\'700\' height=\'477\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 04:16:41',
        'modified': '2013-08-03 01:19:04',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 46,
            'slug': 'css',
            'title': 'CSS',
            'description': '',
            'post_count': 1
          },
          {
            'id': 45,
            'slug': 'html',
            'title': 'HTML',
            'description': '',
            'post_count': 1
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 446,
            'url': 'assets/images/2013/07/debit-1.jpg',
            'slug': 'debit-1',
            'title': 'debit-1',
            'description': '',
            'caption': '',
            'parent': 445,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/debit-1.jpg',
                'width': 700,
                'height': 477
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/debit-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/debit-1-300x204.jpg',
                'width': 300,
                'height': 204
              }
            }
          },
          {
            'id': 447,
            'url': 'assets/images/2013/07/debit-2.jpg',
            'slug': 'debit-2',
            'title': 'debit-2',
            'description': '',
            'caption': '',
            'parent': 445,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/debit-2.jpg',
                'width': 700,
                'height': 477
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/debit-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/debit-2-300x204.jpg',
                'width': 300,
                'height': 204
              }
            }
          },
          {
            'id': 448,
            'url': 'assets/images/2013/07/debit-3.jpg',
            'slug': 'debit-3',
            'title': 'debit-3',
            'description': '',
            'caption': '',
            'parent': 445,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/debit-3.jpg',
                'width': 700,
                'height': 477
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/debit-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/debit-3-300x204.jpg',
                'width': 300,
                'height': 204
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.target.com/redcard/application'
          ],
          'about_project': [
            "I was tasked with building out Target RedCard's sign-up pages, which included translating comps to HTML markup as well as light JavaScript work."
          ]
        }
      },
      {
        'id': 41,
        'type': 'post',
        'slug': 'snackisodes',
        'url': 'http://iiiiiiiiii.co/commercial/snackisodes/',
        'status': 'publish',
        'title': 'Hostess Snackisodes',
        'title_plain': 'Hostess Snackisodes',
        'content': '<p><img class=\'42\' title=\'1_0006_snackisode_1\' alt=\'\' src=\'/assets/images/2012/05/1_0006_snackisode_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'43\' title=\'1_0007_snackisode_2\' alt=\'\' src=\'/assets/images/2012/05/1_0007_snackisode_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'44\' title=\'1_0008_snackisode_3\' alt=\'\' src=\'/assets/images/2012/05/1_0008_snackisode_3.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:42:22',
        'modified': '2013-08-03 01:16:08',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 12,
            'slug': 'as3',
            'title': 'AS3',
            'description': '',
            'post_count': 6
          },
          {
            'id': 21,
            'slug': 'deep-facebook-graph-api-integration',
            'title': 'Deep Facebook Graph API Integration',
            'description': '',
            'post_count': 1
          },
          {
            'id': 26,
            'slug': 'fwa-peoples-choice',
            'title': 'FWA Peoples Choice',
            'description': '',
            'post_count': 1
          },
          {
            'id': 38,
            'slug': 'sharing',
            'title': 'Sharing',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            'Hostess Snackisodes is a funny, embed-yourself-in-the-film style interactive experience that I developed at Click 3X, in partnership with \'Josh and Vince\' of College Humor.  It was built in ActionScript 3 and utilized very deep integration with the Facebook Graph API.\r\n\r\n<br /><br />\r\n\r\nSnackisodes was a 2012 People’s Choice Finalist.  '
          ]
        }
      },
      {
        'id': 440,
        'type': 'post',
        'slug': 'pop-agency-ios-sign-in-app',
        'url': 'http://iiiiiiiiii.co/commercial/pop-agency-ios-sign-in-app/',
        'status': 'publish',
        'title': 'POP iOS Sign-In App',
        'title_plain': 'POP iOS Sign-In App',
        'content': '<p><img class=\'441\' alt=\'pop-1\' src=\'/assets/images/2013/07/pop-1.jpg\' width=\'700\' height=\'525\' /> <img class=\'442\' alt=\'pop-2\' src=\'/assets/images/2013/07/pop-2.jpg\' width=\'700\' height=\'525\' /> <img class=\'443\' alt=\'pop-3\' src=\'/assets/images/2013/07/pop-3.jpg\' width=\'700\' height=\'525\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 04:15:04',
        'modified': '2013-08-06 03:00:07',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 28,
            'slug': 'ios',
            'title': 'iOS',
            'description': '',
            'post_count': 4
          },
          {
            'id': 47,
            'slug': 'rubymotion',
            'title': 'RubyMotion',
            'description': '',
            'post_count': 1
          },
          {
            'id': 49,
            'slug': 'sugarcube',
            'title': 'Sugarcube',
            'description': '',
            'post_count': 1
          },
          {
            'id': 48,
            'slug': 'teacup',
            'title': 'Teacup',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 441,
            'url': 'assets/images/2013/07/pop-1.jpg',
            'slug': 'pop-1',
            'title': 'pop-1',
            'description': '',
            'caption': '',
            'parent': 440,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/pop-1.jpg',
                'width': 700,
                'height': 525
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/pop-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/pop-1-300x225.jpg',
                'width': 300,
                'height': 225
              }
            }
          },
          {
            'id': 442,
            'url': 'assets/images/2013/07/pop-2.jpg',
            'slug': 'pop-2',
            'title': 'pop-2',
            'description': '',
            'caption': '',
            'parent': 440,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/pop-2.jpg',
                'width': 700,
                'height': 525
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/pop-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/pop-2-300x225.jpg',
                'width': 300,
                'height': 225
              }
            }
          },
          {
            'id': 443,
            'url': 'assets/images/2013/07/pop-3.jpg',
            'slug': 'pop-3',
            'title': 'pop-3',
            'description': '',
            'caption': '',
            'parent': 440,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/pop-3.jpg',
                'width': 700,
                'height': 525
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/pop-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/pop-3-300x225.jpg',
                'width': 300,
                'height': 225
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'https://github.com/damassi/RubyMotion-Presentation'
          ],
          'about_project': [
            "In an effort to expand POP Agency's mobile development toolset, when the idea was thrown around to ditch the traditional pen and paper approach to user sign-in, I offered to take on the challenge and create an iPad app.  Instead of using Objective-C, I wanted to build it out in RubyMotion, a revolutionary toolchain that lets you develop entirely native iOS and desktop applications using Ruby, the command line, and your favorite text editor; there is no performance hit, and all of the various Cocoa APIs are available.  The process was documented internally and eventually a presentation was given with a specific focus on our mobile department.  That presentation can be found on my Github account here:  https://github.com/damassi/RubyMotion-Presentation.  \r\n\r\nIts been over a year since I first started using the toolchain and have remained completely in love."
          ]
        }
      },
      {
        'id': 93,
        'type': 'post',
        'slug': 'motorola-global-wiki',
        'url': 'http://iiiiiiiiii.co/commercial/motorola-global-wiki/',
        'status': 'publish',
        'title': 'Motorola | Global Design Wiki',
        'title_plain': 'Motorola | Global Design Wiki',
        'content': '<p><img class=\'97\' title=\'moto_6\' alt=\'\' src=\'/assets/images/2012/05/moto_6.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img title=\'moto_3\' alt=\'\' src=\'/assets/images/2012/05/moto_3.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:59:57',
        'modified': '2013-08-03 01:27:07',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 19,
            'slug': 'custom-plugin-development',
            'title': 'Custom Plugin Development',
            'description': '',
            'post_count': 1
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 36,
            'slug': 'php',
            'title': 'PHP',
            'description': '',
            'post_count': 4
          },
          {
            'id': 42,
            'slug': 'wordpress',
            'title': 'Wordpress',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            ''
          ],
          'about_project': [
            'While working at Motorola Global Interactive I was tasked with developing an online wiki that internal and outside agencies could refer to for design direction.  Built on top of WordPress, with plenty of JavaScript sprinkled about. '
          ]
        }
      },
      {
        'id': 642,
        'type': 'post',
        'slug': 'quit-your-bank',
        'url': 'http://iiiiiiiiii.co/commercial/quit-your-bank/',
        'status': 'publish',
        'title': 'Quit Your Bank',
        'title_plain': 'Quit Your Bank',
        'content': '<p><img class=\'643\' alt=\'quityourbank\' src=\'/assets/images/2013/08/quityourbank.png\' width=\'700\' height=\'471\' /></p>\n',
        'excerpt': '',
        'date': '2013-08-06 03:01:47',
        'modified': '2013-08-06 03:04:04',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 22,
            'slug': 'design',
            'title': 'Design',
            'description': '',
            'post_count': 2
          },
          {
            'id': 31,
            'slug': 'javascript',
            'title': 'Javascript',
            'description': '',
            'post_count': 7
          },
          {
            'id': 36,
            'slug': 'php',
            'title': 'PHP',
            'description': '',
            'post_count': 4
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 643,
            'url': 'assets/images/2013/08/quityourbank.png',
            'slug': 'quityourbank',
            'title': 'quityourbank',
            'description': '',
            'caption': '',
            'parent': 642,
            'mime_type': 'image/png',
            'images': {
              'full': {
                'url': 'assets/images/2013/08/quityourbank.png',
                'width': 700,
                'height': 471
              },
              'thumbnail': {
                'url': 'assets/images/2013/08/quityourbank-150x150.png',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/08/quityourbank-300x201.png',
                'width': 300,
                'height': 201
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.quityourbank.org'
          ],
          'about_project': [
            'At the height of Occupy Wallstreet my girlfriend and I wanted to find a way to contribute and came up with QuitYourBank.org, a site to showcase solidarity support for alternative banking systems in opposition to the global banking cartels.  '
          ]
        }
      },
      {
        'id': 432,
        'type': 'post',
        'slug': 'microsoft-all-new-outlook',
        'url': 'http://iiiiiiiiii.co/commercial/microsoft-all-new-outlook/',
        'status': 'publish',
        'title': 'Microsoft | All New Outlook',
        'title_plain': 'Microsoft | All New Outlook',
        'content': '<p><img class=\'433\' alt=\'signout-1\' src=\'/assets/images/2013/07/signout-1.jpg\' width=\'700\' height=\'538\' /> <img class=\'434\' alt=\'signout-2\' src=\'/assets/images/2013/07/signout-2.jpg\' width=\'700\' height=\'538\' /> <img class=\'435\' alt=\'signout-3\' src=\'/assets/images/2013/07/signout-3.jpg\' width=\'700\' height=\'538\' /></p>\n',
        'excerpt': '',
        'date': '2013-07-05 04:13:03',
        'modified': '2013-08-03 01:18:17',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 18,
            'slug': 'css3',
            'title': 'CSS3',
            'description': '',
            'post_count': 1
          },
          {
            'id': 59,
            'slug': 'stylus',
            'title': 'Stylus',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [
          {
            'id': 433,
            'url': 'assets/images/2013/07/signout-1.jpg',
            'slug': 'signout-1',
            'title': 'signout-1',
            'description': '',
            'caption': '',
            'parent': 432,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/signout-1.jpg',
                'width': 700,
                'height': 538
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/signout-1-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/signout-1-300x230.jpg',
                'width': 300,
                'height': 230
              }
            }
          },
          {
            'id': 434,
            'url': 'assets/images/2013/07/signout-2.jpg',
            'slug': 'signout-2',
            'title': 'signout-2',
            'description': '',
            'caption': '',
            'parent': 432,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/signout-2.jpg',
                'width': 700,
                'height': 538
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/signout-2-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/signout-2-300x230.jpg',
                'width': 300,
                'height': 230
              }
            }
          },
          {
            'id': 435,
            'url': 'assets/images/2013/07/signout-3.jpg',
            'slug': 'signout-3',
            'title': 'signout-3',
            'description': '',
            'caption': '',
            'parent': 432,
            'mime_type': 'image/jpeg',
            'images': {
              'full': {
                'url': 'assets/images/2013/07/signout-3.jpg',
                'width': 700,
                'height': 538
              },
              'thumbnail': {
                'url': 'assets/images/2013/07/signout-3-150x150.jpg',
                'width': 150,
                'height': 150
              },
              'medium': {
                'url': 'assets/images/2013/07/signout-3-300x230.jpg',
                'width': 300,
                'height': 230
              }
            }
          }
        ],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.microsoft.com/en-us/outlook-com/connections/'
          ],
          'about_project': [
            'POP Agency was in charge of developing many aspects of the new Microsoft Outlook email platform, and I was responsible for handling the responsive, front-end portion of the sign-out process.  \r\n\r\n<br/><br/>\r\n\r\nUsing Stylus, the CSS preprocessor created by the ever-prolific TJ Holowaychuk, I was able to simplify many of the issues surrounding the creation and maintenance of nearly a hundred different static pages, for every region of the world.  '
          ]
        }
      },
      {
        'id': 46,
        'type': 'post',
        'slug': 'click3x-shredsled-2k12',
        'url': 'http://iiiiiiiiii.co/commercial/click3x-shredsled-2k12/',
        'status': 'publish',
        'title': 'Click3X ShredSled 2K12',
        'title_plain': 'Click3X ShredSled 2K12',
        'content': '<p><img class=\'47\' title=\'1_0016_shred_1\' alt=\'\' src=\'/assets/images/2012/05/1_0016_shred_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'48\' title=\'1_0017_shred_2\' alt=\'\' src=\'/assets/images/2012/05/1_0017_shred_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'49\' title=\'1_0018_shred_3\' alt=\'\' src=\'/assets/images/2012/05/1_0018_shred_3.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'50\' title=\'1_0019_shred_4\' alt=\'\' src=\'/assets/images/2012/05/1_0019_shred_4.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:43:45',
        'modified': '2013-08-03 01:19:30',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 12,
            'slug': 'as3',
            'title': 'AS3',
            'description': '',
            'post_count': 6
          },
          {
            'id': 14,
            'slug': 'box2d',
            'title': 'Box2D',
            'description': '',
            'post_count': 2
          },
          {
            'id': 20,
            'slug': 'custom-user-photo-integration',
            'title': 'Custom User Photo Integration',
            'description': '',
            'post_count': 1
          },
          {
            'id': 25,
            'slug': 'facebook-graph-api',
            'title': 'Facebook Graph API',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://click3x.com/holidaycard/2011'
          ],
          'about_project': [
            'Yearly, Click3X creates a holiday card to send out to their many clients, and last year the bosses decided to push it a bit further by sending out a holiday game—SHRED SHED 2K12 was born.  \r\n\r\n<br/><br/>\r\n\r\nAs the sole developer, I was responsible for creating a generative, pinball-like world built on top of Box2D, AS3 and the FacebookSDK.  The user gets to upload their own photo, snap one from their webcam, select one from Facebook, or pick one of six company principles as the sledder.  Blasting off the start ramp, the user flies down the side of the mountain collecting points and encountering various Click 3X employees along the way.  '
          ]
        }
      },
      {
        'id': 268,
        'type': 'post',
        'slug': 'cigna-standing-o',
        'url': 'http://iiiiiiiiii.co/commercial/cigna-standing-o/',
        'status': 'publish',
        'title': 'Cigna | GO YOU! iOS APP',
        'title_plain': 'Cigna | GO YOU! iOS APP',
        'content': '<p><img class=\'269\' title=\'cigna_1\' alt=\'\' src=\'/assets/images/2012/06/cigna_1.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-06-10 18:53:55',
        'modified': '2013-08-03 01:19:44',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 28,
            'slug': 'ios',
            'title': 'iOS',
            'description': '',
            'post_count': 4
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'https://itunes.apple.com/us/app/go-you/id582002779?mt=8'
          ],
          'about_project': [
            'Cigna GO YOU! is a simple iOS app for telling your friends that you care—select a message, watch a cool animation, add a note and send.  '
          ]
        }
      },
      {
        'id': 68,
        'type': 'post',
        'slug': 'hon-online-showroom',
        'url': 'http://iiiiiiiiii.co/commercial/hon-online-showroom/',
        'status': 'publish',
        'title': 'HON | Online Showroom',
        'title_plain': 'HON | Online Showroom',
        'content': '<p><img class=\'69\' title=\'hon_1\' alt=\'\' src=\'/assets/images/2012/05/hon_1.jpg\' width=\'700\' height=\'435\' /></p>\n<p><img class=\'74\' title=\'hon_2\' alt=\'\' src=\'/assets/images/2012/05/hon_21.jpg\' width=\'700\' height=\'435\' /></p>\n<p><img class=\'75\' title=\'hon_3\' alt=\'\' src=\'/assets/images/2012/05/hon_31.jpg\' width=\'700\' height=\'435\' /></p>\n<p><img class=\'76\' title=\'hon_4\' alt=\'\' src=\'/assets/images/2012/05/hon_41.jpg\' width=\'700\' height=\'435\' /></p>\n<p><img class=\'77\' title=\'hon_5\' alt=\'\' src=\'/assets/images/2012/05/hon_51.jpg\' width=\'700\' height=\'435\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:53:25',
        'modified': '2013-08-03 01:25:48',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 12,
            'slug': 'as3',
            'title': 'AS3',
            'description': '',
            'post_count': 6
          },
          {
            'id': 34,
            'slug': 'papervision-3d',
            'title': 'Papervision 3D',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.iiiiiiiiii.co/_VOLUME1/commercial/work/hon/onlineshowroom/'
          ],
          'about_project': [
            "HON Online Showroom is HON Furniture's digital showroom, a 3-D experience showing their latest offerings.  Built using PaperVision3D in ActionScript 3."
          ]
        }
      },
      {
        'id': 99,
        'type': 'post',
        'slug': '1237-west',
        'url': 'http://iiiiiiiiii.co/commercial/1237-west/',
        'status': 'publish',
        'title': '1237 West',
        'title_plain': '1237 West',
        'content': '<p><img class=\'100\' title=\'1237_1\' alt=\'\' src=\'/assets/images/2012/05/1237_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'101\' title=\'1237_2\' alt=\'\' src=\'/assets/images/2012/05/1237_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'102\' title=\'1237_3\' alt=\'\' src=\'/assets/images/2012/05/1237_3.jpg\' width=\'700\' height=\'420\' /></p>\n<p>&nbsp;</p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-30 00:01:36',
        'modified': '2013-08-03 01:26:34',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 6,
            'slug': 'after-effects',
            'title': 'After Effects',
            'description': '',
            'post_count': 2
          },
          {
            'id': 11,
            'slug': 'as2',
            'title': 'AS2',
            'description': '',
            'post_count': 1
          },
          {
            'id': 17,
            'slug': 'configurator',
            'title': 'Configurator',
            'description': '',
            'post_count': 1
          },
          {
            'id': 39,
            'slug': 'soap-webservices',
            'title': 'Soap WebServices',
            'description': '',
            'post_count': 1
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.1237west.com/'
          ],
          'about_project': [
            'Magically (and almost mysteriously) this site is still live and being updated yearly.  Built nearly 8 years ago when ActionScript 2 was still in its heyday, it serves as an online portal for potential and current 1237 West residents.  Responsible for development, motion graphics and animation.'
          ]
        }
      },
      {
        'id': 88,
        'type': 'post',
        'slug': 'canon-vii',
        'url': 'http://iiiiiiiiii.co/commercial/canon-vii/',
        'status': 'publish',
        'title': 'Canon VII',
        'title_plain': 'Canon VII',
        'content': '<p><img class=\'89\' title=\'canon_1\' alt=\'\' src=\'/assets/images/2012/05/canon_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'90\' title=\'canon_2\' alt=\'\' src=\'/assets/images/2012/05/canon_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'91\' title=\'canon_3\' alt=\'\' src=\'/assets/images/2012/05/canon_3.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'excerpt': '<p>Developer</p>\n',
        'date': '2012-05-29 23:56:58',
        'modified': '2013-08-03 01:26:46',
        'categories': [
          {
            'id': 4,
            'slug': 'projects',
            'title': 'Projects',
            'description': '',
            'parent': 0,
            'post_count': 27
          }
        ],
        'tags': [
          {
            'id': 6,
            'slug': 'after-effects',
            'title': 'After Effects',
            'description': '',
            'post_count': 2
          },
          {
            'id': 10,
            'slug': 'animation',
            'title': 'Animation',
            'description': '',
            'post_count': 3
          },
          {
            'id': 12,
            'slug': 'as3',
            'title': 'AS3',
            'description': '',
            'post_count': 6
          }
        ],
        'author': {
          'id': 1,
          'slug': 'admin',
          'name': 'admin',
          'first_name': '',
          'last_name': '',
          'nickname': 'admin',
          'url': '',
          'description': ''
        },
        'comments': [],
        'attachments': [],
        'comment_count': 0,
        'comment_status': 'open',
        'custom_fields': {
          'site_url': [
            'http://www.iiiiiiiiii.co/_VOLUME1/commercial/work/canon/'
          ],
          'about_project': [
            'A microsite showcasing the work of Canon’s elite \'VII\' team of photographers.  I was responsible for development and animation.  '
          ]
        }
      }
    ],
    'query': {
      'ignore_sticky_posts': true,
      'count': '200'
    }
  }
}
